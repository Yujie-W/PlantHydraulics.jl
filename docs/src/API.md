# API
```@meta
CurrentModule = PlantHydraulics
```

## Structures
Plant hydraulics is segmented to three organ-level systems/structs ([`LeafHydraulics`](@ref), [`RootHydraulics](@ref), and [`StemHydraulics`](@ref)) subject to an Abstract type (`AbstractHydraulicsSystem`). The major differences among the three structs are
- There is an extra-xylary component in [`LeafHydraulics`](@ref)
- There is a rhizosphere component in the [`RootHydraulics`](@ref)
- There is a gravity component in [`RootHydraulics](@ref) and [`StemHydraulics`](@ref)

See the documentation for each struct for more details:
```@docs
AbstractHydraulicSystem
LeafHydraulics
RootHydraulics
StemHydraulics
```

To initialize a hydraulics system, one needs to provide the floating type, for example:
```julia
using PlantHydraulics

FT = Float32;
hs_leaf = LeafHydraulics{FT}();
hs_root = RootHydraulics{FT}();
hs_stem = StemHydraulics{FT}();
```

### Plant hydraulics system
```@docs
AbstractPlantHS
GrassLikeHS
PalmLikeHS
TreeLikeHS
```

## Hydraulic functions

### Xylem vulnerability
```@docs
weibull_k_ratio
```

### Xylem hydraulics
```@docs
xylem_p_from_flow
q_diff
root_q_from_pressure
root_qs_p_from_q
leaf_xylem_risk
leaf_e_crit
hydraulic_p_profile!
```

```@docs
tree_p_from_flow
tree_e_crit
```
