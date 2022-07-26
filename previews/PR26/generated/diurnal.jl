# load packages
using PlantHydraulics
using PlotPlants
using ProgressMeter
FT = Float32;

# prescribing time series (two days)
Δt    = FT(10);
T_day = FT(24 * 60 * 60);
Ts    = collect(FT, 0:Δt:(2*T_day));
Hs    = Ts ./ 3600;
Rs    = (Hs .- 6) ./ 24 .* FT(2π);
Es    = max.(FT(5e-4), sin.(Rs) ./ 100);

grass = create_grass_like_hs(FT(-2),FT(2),FT[0,-1,-2],FT[0,1,2]);
LWCs  = similar(Es);
for i in eachindex(Es)
    # update evaporation rate
    for leaf in grass.leaves
        leaf.q_out = Es[i];
    end

    # update water contents
    update_PVF!(grass, Δt);

    # calculate total leaf water content
    lwc = 0;
    for leaf in grass.leaves
        lwc += leaf.area * leaf.v_storage;
    end
    LWCs[i] = lwc;
end

_fig,_axes = create_canvas("Leaf water content"; figsize=(5.5,3.5));
_ax1 = _axes[1];
_bx1 = _ax1.twinx();
_ax1.plot(Hs, Es, "-", color="salmon");
_bx1.plot(Hs, LWCs, "-", color="royalblue");
_ax1.set_xlabel("Hour (h)");
_ax1.set_ylabel("Leaf transpiration rate (mol m⁻² s⁻¹)", color="salmon");
_ax1.set_xticks(collect(0:4:48));
_ax1.set_xlim(0,48);
_bx1.set_ylabel("Grass canopy water content (mol)", color="royalblue");
_fig.set_tight_layout(true);
_fig

tree = create_tree_like_hs(FT(-2.1), FT(5.5), FT(10), FT[0,-1,-2,-3],
                           collect(FT,0:1:20));
LWCs = similar(Es);
for i in eachindex(Es)
    # update evaporation rate
    for leaf in tree.leaves
        leaf.q_out = Es[i];
    end

    # update water contents
    update_PVF!(tree, Δt);

    # calculate total leaf water content
    lwc = 0;
    for leaf in tree.leaves
        lwc += leaf.area * leaf.v_storage;
    end
    LWCs[i] = lwc;
end

_fig,_axes = create_canvas("Leaf water content"; figsize=(5.5,3.5));
_ax1 = _axes[1];
_bx1 = _ax1.twinx();
_ax1.plot(Hs, Es, "-", color="salmon");
_bx1.plot(Hs, LWCs, "-", color="royalblue");
_ax1.set_xlabel("Hour (h)");
_ax1.set_ylabel("Leaf transpiration rate (mol m⁻² s⁻¹)", color="salmon");
_ax1.set_xticks(collect(0:4:48));
_ax1.set_xlim(0,48);
_bx1.set_ylabel("Tree canopy water content (mol)", color="royalblue");
_fig.set_tight_layout(true);
_fig

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl
