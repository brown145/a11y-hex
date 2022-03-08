import { TILE_OVERLAY_TYPES } from "../../types";

export function makeHex(
  grid,
  { terrain = TILE_OVERLAY_TYPES.Empty, tokens = [], x, y }
) {
  const hex = grid.get({ x, y });

  hex.terrain = terrain;
  hex.tokens = tokens;

  return hex;
}
