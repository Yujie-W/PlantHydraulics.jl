# load packages
using PlantHydraulics
using PlotPlants
FT = Float32;

# prescribed soil types
_sh1 = BrooksCorey{FT}();
_sh2 = VanGenuchten{FT}();
_STS = ["Sand", "Loamy Sand", "Sandy Loam", "Loam", "Sandy Clay Loam",
        "Silt Loam", "Silt", "Clay Loam", "Silty Clay Loam", "Sandy Clay",
        "Silty Clay", "Clay"];

function compare_soil_vc(sn::Int)
    _bc = create_soil_VC(_sh1, _STS[sn]);
    _vg = create_soil_VC(_sh2, _STS[sn]);
    @show _bc.b, _bc.ϕs;

    _fig,_axes = create_canvas(_STS[sn]; ncol=2);
    _ax1,_ax2  = _axes;

    _Θs = range(_bc.Θr+FT(1e-3); stop=_bc.Θs, length=50);
    _P1 = -1 .* soil_p_25_swc.([_bc], _Θs);
    _P2 = -1 .* soil_p_25_swc.([_vg], _Θs);
    _K1 = soil_k_ratio_swc.([_bc], _Θs);
    _K2 = soil_k_ratio_swc.([_vg], _Θs);

    _ax1.plot(_Θs, _P1, "b-", label="Brooks Corey" );
    _ax1.plot(_Θs, _P2, "r-", label="van Genuchten");
    _ax2.plot(_Θs, _K1, "b-");
    _ax2.plot(_Θs, _K2, "r-");
    _ax1.set_yscale("log");
    _ax1.legend(loc="upper right");
    set_xlabels!(_axes, ["Soil Water Content (-)" for i in 1:2]);
    set_ylabels!(_axes, ["Metric potential (-MPa)", "Relative K"]);
    _fig.set_tight_layout(true);

    return _fig
end

compare_soil_vc(1)

compare_soil_vc(2)

compare_soil_vc(3)

compare_soil_vc(4)

compare_soil_vc(5)

compare_soil_vc(6)

compare_soil_vc(7)

compare_soil_vc(8)

compare_soil_vc(9)

compare_soil_vc(10)

compare_soil_vc(11)

compare_soil_vc(12)

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl

