###############################################################################
#
# Whole plant hydraulics
#
###############################################################################
"""
    tree_p_from_flow(tree::Tree{FT}, flow::FT)

Calculate the leaf xylem end pressure, given
- `tree` [`Palm`] struct with 1 root, 1 trunk, and 1 leaf
- `flow` Given flow rate
"""
function tree_p_from_flow(
            tree::PalmLikeHS{FT},
            flow::FT
            ) where {FT<:AbstractFloat}
    if tree.n_root == tree.n_canopy == 1
        # calculate the p_dos for roots
        p_dos = xylem_p_from_flow(tree.roots[1], flow);
        (tree.trunk).p_ups = p_dos;

        # calculate the p_dos for trunk
        p_dos = xylem_p_from_flow(tree.trunk, flow);
        tree.leaves[1].p_ups = p_dos;

        # calculate the p_dos for leaves
        p_dos = xylem_p_from_flow(tree.leaves[1], flow);

        return p_dos
    elseif tree.n_canopy == 1
        # calculate the p_dos for roots
        _qs,_p = root_qs_p_from_q(tree.roots, flow, (tree.trunk).p_ups);
        (tree.trunk).p_ups = _p;

        # calculate the p_dos for trunk
        p_dos = xylem_p_from_flow(tree.trunk, flow);
        tree.leaves[1].p_ups = p_dos;

        # calculate the p_dos for leaves
        p_dos = xylem_p_from_flow(tree.leaves[1], flow);

        return p_dos
    else
        println("No function applicable for multi-layer canopy!")
        return ErrorException("Error!");
    end
end




"""
    tree_e_crit(tree::Tree{FT}, ini::FT)

Calculate the critical flow rate for the tree per LA, given
- `tree` [`Palm`] struct with 1 root, 1 trunk, and 1 leaf
- `ini` Initial guess of the critical flow rate
"""
function tree_e_crit(
            tree::PalmLikeHS{FT},
            ini::FT = FT(0.5)
            ) where {FT<:AbstractFloat}
    # create a tree copy to avoid changing the tree
    # tree_copy = deepcopy(tree);

    # calculate maximal flow
    _hs = tree.leaves[1];
    _fh = (-_hs.p_crt) * _hs.k_sla / _hs.f_vis;
    _fl = FT(0);
    _fx = min((_fh+_fl)/2, ini);
    _ms = NewtonBisectionMethod{FT}(_fl, _fh, _fx);
    _rt = ResidualTolerance{FT}(1e-5);
    @inline f(x) = tree_p_from_flow(tree, x) - tree.leaves[1].p_crt;
    _solut  = find_zero(f, _ms, _rt);
    _ec = _solut;

    return _ec
end
