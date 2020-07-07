###############################################################################
#
# Plant Hydraulic system
#
###############################################################################
"""
    abstract type AbstractPlantHS{FT}

Hierachy of AbstractPlantHS
- [`GrassLikeHS`](@ref)
- [`PalmLikeHS`](@ref)
- [`TreeLikeHS`](@ref)
"""
abstract type AbstractPlantHS{FT} end




"""
    mutable struct GrassLikeHS{FT}

A plant hydraulic system like a grass, which contains multiple root layers, and
multiple canopy layers. No trunk or branch system applies.

# Fields
$(DocStringExtensions.FIELDS)
"""
Base.@kwdef mutable struct GrassLikeHS{FT<:AbstractFloat} <: AbstractPlantHS{FT}
    # structre information
    "Root Layers"
    n_root  ::Int
    "Canopy Layers"
    n_canopy::Int

    # Arrays of roots and leaves
    "Roots system"
    roots ::Array{RootHydraulics{FT},1}
    "Leaves"
    leaves::Array{LeafHydraulics{FT},1}

    # Root and canopy index in Soil and Atmosphere
    "Corresponding soil layer per root layer"
    root_index_in_soil ::Array{Int,1}
    "Corresponding air layer per canopy layer"
    canopy_index_in_air::Array{Int,1}
end




"""
    mutable struct PalmLikeHS{FT}

A plant hydraulic system like a palm, which contains multiple root layers, one
trunk, and multiple canopy layers. No branch system applies.

# Fields
$(DocStringExtensions.FIELDS)
"""
Base.@kwdef mutable struct PalmLikeHS{FT<:AbstractFloat} <: AbstractPlantHS{FT}
    # structre information
    "Root Layers"
    n_root  ::Int
    "Canopy Layers"
    n_canopy::Int

    # Arrays of roots and leaves
    "Roots system"
    roots ::Array{RootHydraulics{FT},1}
    "Trunk"
    trunk ::StemHydraulics{FT}
    "Leaves"
    leaves::Array{LeafHydraulics{FT},1}

    # Root and canopy index in Soil and Atmosphere
    "Corresponding soil layer per root layer"
    root_index_in_soil ::Array{Int,1}
    "Corresponding air layer per canopy layer"
    canopy_index_in_air::Array{Int,1}
end




"""
    mutable struct TreeLikeHS{FT}

A plant hydraulic system like a tree, which contains multiple root layers, one
trunk, and multiple branch and canopy layers.

# Fields
$(DocStringExtensions.FIELDS)
"""
Base.@kwdef mutable struct TreeLikeHS{FT<:AbstractFloat} <: AbstractPlantHS{FT}
    # structre information
    "Root Layers"
    n_root  ::Int
    "Canopy Layers"
    n_canopy::Int

    # Arrays of roots and leaves
    "Roots system"
    roots ::Array{RootHydraulics{FT},1}
    "Trunk"
    trunk ::StemHydraulics{FT}
    "Branch system"
    branch::Array{StemHydraulics{FT},1}
    "Leaves"
    leaves::Array{LeafHydraulics{FT},1}

    # Root and canopy index in Soil and Atmosphere
    "Corresponding soil layer per root layer"
    root_index_in_soil ::Array{Int,1}
    "Corresponding air layer per canopy layer"
    canopy_index_in_air::Array{Int,1}
end
