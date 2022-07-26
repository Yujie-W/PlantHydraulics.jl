var documenterSearchIndex = {"docs":
[{"location":"#PlantHydraulics.jl","page":"Home","title":"PlantHydraulics.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Plant hydraulics package using numerical methods.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using Pkg;\nPkg.add(\"PlantHydraulics\");","category":"page"},{"location":"API/#API","page":"API","title":"API","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = PlantHydraulics","category":"page"},{"location":"API/#Vulnerability-curve","page":"API","title":"Vulnerability curve","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"relative_hydraulic_conductance\ncritical_pressure","category":"page"},{"location":"API/#SoilHydraulics.relative_hydraulic_conductance","page":"API","title":"SoilHydraulics.relative_hydraulic_conductance","text":"relative_hydraulic_conductance(vc::ComplexVC{FT}, p_25::FT) where {FT<:AbstractFloat}\nrelative_hydraulic_conductance(vc::LogisticVC{FT}, p_25::FT) where {FT<:AbstractFloat}\n\nReturn the hydraulic conductance ralative to maximum at reference temperature, given\n\nvc ComplexVC, LogisticVC, PowerVC, or WeibullVC type vulnerability curve\np_25 Equivalent xylem water pressure at 298.15 K in [MPa] (surface tension correction made)\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.critical_pressure","page":"API","title":"PlantHydraulics.critical_pressure","text":"critical_pressure(vc::ComplexVC{FT}, kr::FT = FT(0.001)) where {FT<:AbstractFloat}\ncritical_pressure(vc::LogisticVC{FT}, kr::FT = FT(0.001)) where {FT<:AbstractFloat}\ncritical_pressure(vc::PowerVC{FT}, kr::FT = FT(0.001)) where {FT<:AbstractFloat}\ncritical_pressure(vc::WeibullVC{FT}, kr::FT = FT(0.001)) where {FT<:AbstractFloat}\n\nReturn the critical xylem water pressure at 25 °C that triggers a given amount of loss of conductance, given\n\nvc ComplexVC, LogisticVC, PowerVC, or WeibullVC type struct\nkr Reference conductance, default is 0.001\n\n\n\n\n\n","category":"function"},{"location":"API/#Pressure-volume-curve","page":"API","title":"Pressure volume curve","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"xylem_pressure\ncapacitance_buffer","category":"page"},{"location":"API/#PlantHydraulics.xylem_pressure","page":"API","title":"PlantHydraulics.xylem_pressure","text":"xylem_pressure(pv::LinearPVCurve{FT}, rvol::FT, T::FT) where {FT<:AbstractFloat}\nxylem_pressure(pv::SegmentedPVCurve{FT}, rvol::FT, T::FT) where {FT<:AbstractFloat}\n\nReturn the xylem water pressure in MPa, given\n\npv LinearPVCurve or SegmentedPVCurve type pressure volume curve\nrvol Relative volume (relative to maximum)\nT Temperature\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.capacitance_buffer","page":"API","title":"PlantHydraulics.capacitance_buffer","text":"capacitance_buffer(pvc::LinearPVCurve{FT}) where {FT<:AbstractFloat}\ncapacitance_buffer(pvc::SegmentedPVCurve{FT}) where {FT<:AbstractFloat}\n\nReturn the relative capacictance buffer rate, given\n\npv LinearPVCurve or SegmentedPVCurve type pressure volume curve\n\n\n\n\n\n","category":"function"},{"location":"API/#Cavitation-legacy","page":"API","title":"Cavitation legacy","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"clear_legacy!","category":"page"},{"location":"API/#PlantHydraulics.clear_legacy!","page":"API","title":"PlantHydraulics.clear_legacy!","text":"clear_legacy!(spac::MonoElementSPAC{FT}) where {FT<:AbstractFloat}\nclear_legacy!(spac::MonoMLGrassSPAC{FT}) where {FT<:AbstractFloat}\nclear_legacy!(spac::MonoMLPalmSPAC{FT}) where {FT<:AbstractFloat}\nclear_legacy!(spac::MonoMLTreeSPAC{FT}) where {FT<:AbstractFloat}\nclear_legacy!(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}) where {FT<:AbstractFloat}\nclear_legacy!(organ::Leaves1D{FT}) where {FT<:AbstractFloat}\n\nClear the legacy for hydraulic organ or system, given\n\nspac MonoElementSPAC, MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type structure\norgan Leaf, Leaves1D, Leaves2D, Root, or Stem type structure\n\n\n\n\n\n","category":"function"},{"location":"API/#FLow-profile","page":"API","title":"FLow profile","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"flow_in\nflow_out\nroot_pk\nxylem_flow_profile!\nxylem_flow_profile!(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(roots::Vector{Root{FT}}, cache_f::Vector{FT}, cache_k::Vector{FT}, cache_p::Vector{FT}, f_sum::FT, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(spac::MonoElementSPAC{FT}, Δt::FT) where {FT<:AbstractFloat}","category":"page"},{"location":"API/#PlantHydraulics.flow_in","page":"API","title":"PlantHydraulics.flow_in","text":"flow_in(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}) where {FT<:AbstractFloat}\nflow_in(organ::Leaves1D{FT}) where {FT<:AbstractFloat}\nflow_in(organs::Vector{Leaves2D{FT}}) where {FT<:AbstractFloat}\nflow_in(organs::Vector{Stem{FT}}) where {FT<:AbstractFloat}\n\nReturn the flow rate, given\n\norgan Leaf, Leaves1D, Leaves2D, Root, or Stem type struct\norgans Vector of Leaves2D or Stem type struct\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.flow_out","page":"API","title":"PlantHydraulics.flow_out","text":"flow_out(lf::Union{Leaf{FT}, Leaves2D{FT}}) where {FT<:AbstractFloat}\n\nReturn the net flow that escape from the leaf, given\n\nlf Leaf, Leaves2D, Root, or Stem type organ\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.root_pk","page":"API","title":"PlantHydraulics.root_pk","text":"root_pk(root::Root{FT}) where {FT<:AbstractFloat}\n\nReturn the root end pressure and total hydraulic conductance to find solution of flow rates in all roots, given\n\nroot Root type struct\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.xylem_flow_profile!","page":"API","title":"PlantHydraulics.xylem_flow_profile!","text":"This function is designed to serve the following functionalities:\n\nUpdate flow profile in different organs\nPartition root flow rates at different layers\nUpdate flow profile for entire SPAC\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.xylem_flow_profile!-Union{Tuple{FT}, Tuple{Union{ClimaCache.Leaf{FT}, ClimaCache.Leaves2D{FT}, ClimaCache.Root{FT}, ClimaCache.Stem{FT}}, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.xylem_flow_profile!","text":"xylem_flow_profile!(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(organ::Leaves1D{FT}, Δt::FT) where {FT<:AbstractFloat}\n\nUpdate organ flow rate profile after setting up the flow rate out, given\n\norgan Leaf, Leaves1D, Leaves2D, Root, or Stem type struct\nΔt Time step length\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.xylem_flow_profile!-Union{Tuple{FT}, Tuple{Array{ClimaCache.Root{FT}, 1}, Vector{FT}, Vector{FT}, Vector{FT}, FT, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.xylem_flow_profile!","text":"xylem_flow_profile!(roots::Vector{Root{FT}}, cache_f::Vector{FT}, cache_k::Vector{FT}, cache_p::Vector{FT}, f_sum::FT, Δt::FT) where {FT<:AbstractFloat}\n\nPartition root flow rates at different layers for known total flow rate out, given\n\nroots Vector of Root in a multiple roots system\ncache_f Flow rate cache into each root\ncache_k Total conductance cache of each root\ncache_p Root xylem end pressure cache of each root\nf_sum Total flow rate out of the roots\nΔt Time step length\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.xylem_flow_profile!-Union{Tuple{FT}, Tuple{ClimaCache.MonoElementSPAC{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.xylem_flow_profile!","text":"xylem_flow_profile!(spac::MonoElementSPAC{FT}, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(spac::MonoMLGrassSPAC{FT}, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(spac::MonoMLPalmSPAC{FT}, Δt::FT) where {FT<:AbstractFloat}\nxylem_flow_profile!(spac::MonoMLTreeSPAC{FT}, Δt::FT) where {FT<:AbstractFloat}\n\nUpdate flow profiles for the soil-plant-air continuum (set up leaf flow rate from stomatal conductance first), given\n\nspac MonoElementSPAC, MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type SPAC system\nΔt Time step length\n\n\n\n\n\n","category":"method"},{"location":"API/#Pressure-profile","page":"API","title":"Pressure profile","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"xylem_end_pressure\nxylem_pressure_profile!\nxylem_pressure_profile!(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}; update::Bool = true) where {FT<:AbstractFloat}\nxylem_pressure_profile!(spac::MonoElementSPAC{FT}; update::Bool = true) where {FT<:AbstractFloat}\n∂E∂P","category":"page"},{"location":"API/#PlantHydraulics.xylem_end_pressure","page":"API","title":"PlantHydraulics.xylem_end_pressure","text":"xylem_end_pressure(organ::Union{Leaf{FT}, Root{FT}, Stem{FT}}, flow::FT) where {FT<:AbstractFloat}\nxylem_end_pressure(spac::MonoElementSPAC{FT}, flow::FT) where {FT<:AbstractFloat}\n\nReturn the xylem end water pressure in MPa, given\n\norgan Leaf, Root, or Stem type struct\nflow Flow rate (per leaf area for Leaf) [mol (m⁻²) s⁻¹]\nspac MonoElementSPAC type struct\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.xylem_pressure_profile!","page":"API","title":"PlantHydraulics.xylem_pressure_profile!","text":"This function is designed for the following purposes:\n\nUpdate organ pressure profile\nUpdate pressure profile for the entire SPAC\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.xylem_pressure_profile!-Union{Tuple{Union{ClimaCache.Leaf{FT}, ClimaCache.Leaves2D{FT}, ClimaCache.Root{FT}, ClimaCache.Stem{FT}}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.xylem_pressure_profile!","text":"xylem_pressure_profile!(organ::Union{Leaf{FT}, Leaves2D{FT}, Root{FT}, Stem{FT}}; update::Bool = true) where {FT<:AbstractFloat}\nxylem_pressure_profile!(organ::Leaves1D{FT}; update::Bool = true) where {FT<:AbstractFloat}\n\nUpdate xylem pressure profile (flow profile needs to be updated a priori), given\n\norgan Leaf, Leaves1D, Leaves2D, Root, or Stem type organ\nupdate If true, update xylem cavitation legacy and leaf critical flow (e_crit)\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.xylem_pressure_profile!-Union{Tuple{ClimaCache.MonoElementSPAC{FT}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.xylem_pressure_profile!","text":"xylem_pressure_profile!(spac::MonoElementSPAC{FT}; update::Bool = true) where {FT<:AbstractFloat}\nxylem_pressure_profile!(spac::MonoMLGrassSPAC{FT}; update::Bool = true) where {FT<:AbstractFloat}\nxylem_pressure_profile!(spac::MonoMLPalmSPAC{FT}; update::Bool = true) where {FT<:AbstractFloat}\nxylem_pressure_profile!(spac::MonoMLTreeSPAC{FT}; update::Bool = true) where {FT<:AbstractFloat}\n\nUpdate xylem pressure profile (flow profile needs to be updated a priori), given\n\nspac MonoElementSPAC, MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type spac\nupdate If true, update xylem cavitation legacy\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.∂E∂P","page":"API","title":"PlantHydraulics.∂E∂P","text":"∂E∂P(lf::Union{Leaf{FT}, Leaves2D{FT}}, flow::FT; δe::FT = FT(1e-7)) where {FT<:AbstractFloat}\n∂E∂P(lf::Leaves1D{FT}, flow::FT, ind::Int; δe::FT = FT(1e-7)) where {FT<:AbstractFloat}\n\nReturn the marginal hydraulic conductance, given\n\nlf Leaf, Leaves1D, or Leaves2D type struct\nflow Flow rate through the leaf xylem [mol m⁻² s⁻¹]\nδe Incremental flow rate, default is 1e-7\nind Which leaf in Leaves1D (1 for sunlit and 2 for shaded)\n\n\n\n\n\n","category":"function"},{"location":"API/#Critical-flow","page":"API","title":"Critical flow","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"critical_flow\ncritical_flow(hs::LeafHydraulics{FT}, T::FT, ini::FT = FT(0.5); kr::FT = FT(0.001)) where {FT<:AbstractFloat}\ncritical_flow(spac::MonoElementSPAC{FT}, ini::FT = FT(0.5); kr::FT = FT(0.001)) where {FT<:AbstractFloat}","category":"page"},{"location":"API/#PlantHydraulics.critical_flow","page":"API","title":"PlantHydraulics.critical_flow","text":"This function returns the critical flow rate that triggers a given amount of loss of hydraulic conductance for\n\nLeaf hydraulic system\nMono element SPAC system\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.critical_flow-Union{Tuple{FT}, Tuple{ClimaCache.LeafHydraulics{FT}, FT}, Tuple{ClimaCache.LeafHydraulics{FT}, FT, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.critical_flow","text":"critical_flow(hs::LeafHydraulics{FT}, T::FT, ini::FT = FT(0.5); kr::FT = FT(0.001)) where {FT<:AbstractFloat}\n\nReturn the critical flow rate that triggers a given amount of loss of conductance, given\n\nhs LeafHydraulics type struct\nT Liquid temperature\nini Initial guess\nkr Reference conductance, default is 0.001\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.critical_flow-Union{Tuple{ClimaCache.MonoElementSPAC{FT}}, Tuple{FT}, Tuple{ClimaCache.MonoElementSPAC{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.critical_flow","text":"critical_flow(spac::MonoElementSPAC{FT}, ini::FT = FT(0.5); kr::FT = FT(0.001)) where {FT<:AbstractFloat}\n\nReturn the critical flow rate that triggers a given amount of loss of conductance, given\n\nspac MonoElementSPAC type struct\nini Initial guess\nkr Reference conductance, default is 0.001\n\n\n\n\n\n","category":"method"},{"location":"API/#Tuning-factor","page":"API","title":"Tuning factor","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"β_factor\nβ_factor!\nβ_factor!(spac::MonoElementSPAC{FT}) where {FT<:AbstractFloat}\nβ_factor!(spac::Union{MonoMLGrassSPAC{FT}, MonoMLPalmSPAC{FT}, MonoMLTreeSPAC{FT}}) where {FT<:AbstractFloat}","category":"page"},{"location":"API/#PlantHydraulics.β_factor","page":"API","title":"PlantHydraulics.β_factor","text":"β_factor(f::Function, vc::AbstractXylemVC{FT}, x_25::FT) where {FT<:AbstractFloat}\nβ_factor(f::Function, vc::AbstractSoilVC{FT}, x_25::FT) where {FT<:AbstractFloat}\nβ_factor(f::Function, x_25::FT) where {FT<:AbstractFloat}\n\nReturn the β factor based on relative conductance or soil potential/pressure, given\n\nf Function to translate relative k to β, for example f(x) = x, f(x) = x², and f(x) = sqrt(x) for x in [0,1]\nvc Leaf vulnerability curve or soil vulnerability curve (moisture retention curve)\nx_25 Leaf xylem pressure corrected to 25 °C, soil water potential corrected to 25 °C (forcing on roots, note that this function may not be useful for plants with salt stress), or soil water   content\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.β_factor!","page":"API","title":"PlantHydraulics.β_factor!","text":"This function updates the beta factor for SPAC if empirical models are used. The method is meant to support all SPAC defined in ClimaCache.jl:\n\nMonoElementSPAC\nMonoMLGrassSPAC\nMonoMLPalmSPAC\nMonoMLTreeSPAC\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.β_factor!-Union{Tuple{ClimaCache.MonoElementSPAC{FT}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.β_factor!","text":"β_factor!(spac::MonoElementSPAC{FT}) where {FT<:AbstractFloat}\n\nUpdate the beta factor for the LEAF component in SPAC, given\n\nspac MonoElementSPAC type SPAC\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.β_factor!-Union{Tuple{Union{ClimaCache.MonoMLGrassSPAC{FT}, ClimaCache.MonoMLPalmSPAC{FT}, ClimaCache.MonoMLTreeSPAC{FT}}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.β_factor!","text":"β_factor!(spac::Union{MonoMLGrassSPAC{FT}, MonoMLPalmSPAC{FT}, MonoMLTreeSPAC{FT}}) where {FT<:AbstractFloat}\n\nUpdate the β factor for the LEAVES component in SPAC, given\n\nspac MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type SPAC\n\nNote that if the β function is based on Kleaf or Pleaf, β factor is taken as that of leaf; if the β function is based on Ksoil, Psoil, or Θ, β is taken as the average weighted by flow rate in each     root.\n\n\n\n\n\n","category":"method"},{"location":"API/#Energy-budget","page":"API","title":"Energy budget","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"plant_energy!\nplant_energy!(spac::MonoMLGrassSPAC{FT}) where {FT<:AbstractFloat}\nplant_energy!(spac::MonoMLGrassSPAC{FT}, δt::FT) where {FT<:AbstractFloat}","category":"page"},{"location":"API/#PlantHydraulics.plant_energy!","page":"API","title":"PlantHydraulics.plant_energy!","text":"This function has two major functionalities:\n\nCompute marginal energy increase in each organ\nUpdate the temperature in each organ when time step provided\n\n\n\n\n\n","category":"function"},{"location":"API/#PlantHydraulics.plant_energy!-Union{Tuple{ClimaCache.MonoMLGrassSPAC{FT}}, Tuple{FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.plant_energy!","text":"plant_energy!(spac::MonoMLGrassSPAC{FT}) where {FT<:AbstractFloat}\nplant_energy!(spac::MonoMLPalmSPAC{FT}) where {FT<:AbstractFloat}\nplant_energy!(spac::MonoMLTreeSPAC{FT}) where {FT<:AbstractFloat}\n\nCompute the marginal energy increase in spac, given\n\nspac MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type SPAC\n\n\n\n\n\n","category":"method"},{"location":"API/#PlantHydraulics.plant_energy!-Union{Tuple{FT}, Tuple{ClimaCache.MonoMLGrassSPAC{FT}, FT}} where FT<:AbstractFloat","page":"API","title":"PlantHydraulics.plant_energy!","text":"plant_energy!(spac::MonoMLGrassSPAC{FT}, δt::FT) where {FT<:AbstractFloat}\nplant_energy!(spac::MonoMLPalmSPAC{FT}, δt::FT) where {FT<:AbstractFloat}\nplant_energy!(spac::MonoMLTreeSPAC{FT}, δt::FT) where {FT<:AbstractFloat}\n\nCompute the marginal energy increase in spac, given\n\nspac MonoMLGrassSPAC, MonoMLPalmSPAC, or MonoMLTreeSPAC type SPAC\nδt Time step\n\n\n\n\n\n","category":"method"}]
}
