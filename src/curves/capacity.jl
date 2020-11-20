###############################################################################
#
# Equilibrium pressure from volume
#
###############################################################################
"""
    p_from_volume(
                pv::AbstractCapacity{FT},
                rvol::FT
    ) where {FT<:AbstractFloat}

Calculate equilibrium pressure from relative volume, given
- `pv` [`AbstractCapacity`](@ref) type of struct
"""
function p_from_volume(
            pv::PVCurveLinear{FT},
            rvol::FT
) where {FT<:AbstractFloat}
    return (rvol - 1) / pv.slope
end