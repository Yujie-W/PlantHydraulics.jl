###############################################################################
#
# Creating Plant Hydraulic system
#
###############################################################################
"""
create_palm_like_hs(
        z_root::FT,
        z_trunk::FT,
        z_canopy::FT,
        soil_bounds::Array{FT,1},
        air_bounds::Array{FT,1}
) where {FT<:AbstractFloat}

Create a [`PalmLikeHS`](@ref), given
- `z_root` Maximal root depth (negative value)
- `z_trunk` Maximal trunk height (positive value)
- `z_canopy` Maximal canopy height (positive value)
- `soil_bounds` Array of soil layer boundaries starting from 0
- `air_bounds` Array of air layer boundaries starting from 0
"""
function create_palm_like_hs(
        z_root::FT,
        z_trunk::FT,
        z_canopy::FT,
        soil_bounds::Array{FT,1},
        air_bounds::Array{FT,1}
        ) where {FT<:AbstractFloat}
# determine how many layers in roots and canopy
_n_root  = 0;
_r_index = Int[]
for i in eachindex(soil_bounds)
    _z = soil_bounds[i];
    if _z > z_root
        _n_root += 1;
        push!(_r_index, i);
    else
        break
    end
end

_n_canopy = 0;
_c_index  = Int[];
for i in eachindex(air_bounds)
    _z = air_bounds[i]
    if (_z >= z_trunk) && (_z < z_canopy)
        _n_canopy += 1;
        push!(_c_index, i);
    elseif _z >= z_canopy
        break
    end
end

# create evenly distributed root system for now
_roots = RootHydraulics{FT}[];
for i in _r_index
    _Δh = (soil_bounds[i+1] + soil_bounds[i]) / 2;
    _rt = RootHydraulics{FT}(
                area=0.1/_n_root,
                k_max=2.5/_n_root,
                k_rhiz=1e14/_n_root,
                Δh=_Δh);
    push!(_roots, _rt);
end

# create Trunk
_trunk   = StemHydraulics{FT}(
                k_max=5,
                Δh=z_trunk);

# create leaves
_leaves = LeafHydraulics{FT}[LeafHydraulics{FT}() for i in 1:_n_canopy];

# return plant
return PalmLikeHS{FT}(_n_root,
                      _n_canopy,
                      _roots,
                      _trunk,
                      _leaves,
                      _r_index,
                      _c_index)
end




"""
    create_grass_like_hs(
            z_root::FT,
            z_trunk::FT,
            z_canopy::FT,
            soil_bounds::Array{FT,1},
            air_bounds::Array{FT,1}
    ) where {FT<:AbstractFloat}

Create a [`GrassLikeHS`](@ref), given
- `z_root` Maximal root depth (negative value)
- `z_canopy` Maximal canopy height (positive value)
- `soil_bounds` Array of soil layer boundaries starting from 0
- `air_bounds` Array of air layer boundaries starting from 0
"""
function create_grass_like_hs(
            z_root::FT,
            z_canopy::FT,
            soil_bounds::Array{FT,1},
            air_bounds::Array{FT,1}
            ) where {FT<:AbstractFloat}
    # determine how many layers in roots and canopy
    _n_root  = 0;
    _r_index = Int[]
    for i in eachindex(soil_bounds)
        _z = soil_bounds[i];
        if _z > z_root
            _n_root += 1;
            push!(_r_index, i);
        else
            break
        end
    end

    _n_canopy = 0;
    _c_index  = Int[];
    for i in eachindex(air_bounds)
        _z = air_bounds[i]
        if _z < z_canopy
            _n_canopy += 1;
            push!(_c_index, i);
        elseif _z >= z_canopy
            break
        end
    end

    # create evenly distributed root system for now
    _roots = RootHydraulics{FT}[];
    for i in _r_index
        _Δh = (soil_bounds[i+1] + soil_bounds[i]) / 2;
        _rt = RootHydraulics{FT}(
                    area=0.1/_n_root,
                    k_max=2.5/_n_root,
                    k_rhiz=1e14/_n_root,
                    Δh=_Δh);
        push!(_roots, _rt);
    end

    # create leaves
    _leaves = LeafHydraulics{FT}[LeafHydraulics{FT}() for i in 1:_n_canopy];

    # return plant
    return GrassLikeHS{FT}(_n_root,
                           _n_canopy,
                           _roots,
                           _leaves,
                           _r_index,
                           _c_index)
end




"""
    create_tree_like_hs(
            z_root::FT,
            z_trunk::FT,
            z_canopy::FT,
            soil_bounds::Array{FT,1},
            air_bounds::Array{FT,1}
    ) where {FT<:AbstractFloat}

Create a [`TreeLikeHS`](@ref), given
- `z_root` Maximal root depth (negative value)
- `z_trunk` Maximal trunk height (positive value)
- `z_canopy` Maximal canopy height (positive value)
- `soil_bounds` Array of soil layer boundaries starting from 0
- `air_bounds` Array of air layer boundaries starting from 0
"""
function create_tree_like_hs(
            z_root::FT,
            z_trunk::FT,
            z_canopy::FT,
            soil_bounds::Array{FT,1},
            air_bounds::Array{FT,1}
) where {FT<:AbstractFloat}
    # determine how many layers in roots and canopy
    _n_root  = 0;
    _r_index = Int[]
    for i in eachindex(soil_bounds)
        _z = soil_bounds[i];
        if _z > z_root
            _n_root += 1;
            push!(_r_index, i);
        else
            break
        end
    end

    _n_canopy = 0;
    _c_index  = Int[];
    for i in eachindex(air_bounds)
        _z = air_bounds[i]
        if (_z >= z_trunk) && (_z < z_canopy)
            _n_canopy += 1;
            push!(_c_index, i);
        elseif _z >= z_canopy
            break
        end
    end

    # create evenly distributed root system for now
    _roots = RootHydraulics{FT}[];
    for i in _r_index
        _Δh = (soil_bounds[i+1] + soil_bounds[i]) / 2;
        _rt = RootHydraulics{FT}(
                    area=0.1/_n_root,
                    k_max=2.5/_n_root,
                    k_rhiz=1e14/_n_root,
                    Δh=_Δh);
        push!(_roots, _rt);
    end

    # create Trunk
    _k_trunk = z_canopy / z_trunk * 5;
    _trunk   = StemHydraulics{FT}(
                    k_max=_k_trunk,
                    Δh=z_trunk);

    # create Branches
    _k_branch = z_canopy / (z_canopy - z_trunk) * 5;
    _branch   = StemHydraulics{FT}[];
    for i in _c_index
        _Δh = (air_bounds[i] + max(air_bounds[i+1], z_trunk)) / 2 - z_trunk;
        _st = StemHydraulics{FT}(
                    area=0.1/_n_canopy,
                    k_max=_k_branch/_n_canopy,
                    Δh=_Δh);
        push!(_branch, _st);
    end

    # create leaves
    _leaves = LeafHydraulics{FT}[LeafHydraulics{FT}() for i in 1:_n_canopy];

    # return plant
    return TreeLikeHS{FT}(_n_root,
                          _n_canopy,
                          _roots,
                          _trunk,
                          _branch,
                          _leaves,
                          _r_index,
                          _c_index)
end
