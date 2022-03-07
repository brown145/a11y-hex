import { TILE_OVERLAY_TYPES } from "../../../types";
import { gameColors } from "../../../theme";

function terrainToColor(terrain) {
  switch (terrain) {
    case TILE_OVERLAY_TYPES.Wall:
      return "#929292";
    case TILE_OVERLAY_TYPES.Obstacle:
      return gameColors.obstacle;
    case TILE_OVERLAY_TYPES.Hazard:
      return gameColors.hazard;
    case TILE_OVERLAY_TYPES.Difficult:
      return gameColors.difficult;
    case TILE_OVERLAY_TYPES.Door:
      return gameColors.door;
    case TILE_OVERLAY_TYPES.Corridor:
      return gameColors.corridor;
    default:
      return "#fff";
  }
}

export default terrainToColor;
