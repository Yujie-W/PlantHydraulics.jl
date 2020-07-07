# API
```@meta
CurrentModule = PlantHydraulics
```

## Structs
### Individual hydraulics system
```@docs
AbstractHydraulicSystem
LeafHydraulics
RootHydraulics
StemHydraulics
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
