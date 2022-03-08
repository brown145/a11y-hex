import { STANDDEE_TYPES, TILE_OVERLAY_TYPES, TOKEN_TYPES } from "../../types";

import { makeGrid } from "./makeGrid";
import { makeHex } from "./makeHex";
import { makeStandee } from "./makeStandee";
import splitXY from "./splitXY";
import statusFromStatusText from "./statusFromStatusText";

const scenrioToGrid = (scenrioJSON) => {
  // Make the grid
  const grid = makeGrid(scenrioJSON.grid);

  // Populate players
  Object.entries(scenrioJSON.players).forEach(([label, data]) => {
    const { x, y } = splitXY(data.xy);
    const { initiative } = data;
    const statuses = data.statuses?.map(statusFromStatusText);
    makeStandee(grid, {
      type: STANDDEE_TYPES.Player,
      x,
      y,
      label,
      initiative,
      statuses,
    });
  });

  // Populate monsters
  Object.entries(scenrioJSON.monsters).forEach(([label, data]) => {
    const { x, y } = splitXY(data.xy);
    const statuses = data.statuses?.map(statusFromStatusText);
    makeStandee(grid, { type: STANDDEE_TYPES.Monster, x, y, label, statuses });
  });

  // Populate obstacles
  Object.entries(scenrioJSON.obstacles).forEach(([label, data]) => {
    const { x, y } = splitXY(data.xy);
    const terrain = TILE_OVERLAY_TYPES.Obstacle;
    makeHex(grid, { x, y, terrain });
  });

  // Populate traps
  Object.entries(scenrioJSON.traps).forEach(([label, data]) => {
    const { x, y } = splitXY(data.xy);
    const tokens = [TOKEN_TYPES.Trap];
    makeHex(grid, { x, y, tokens });
  });

  return grid;
};

export default scenrioToGrid;
