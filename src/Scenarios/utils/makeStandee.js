import { isStandee } from "./isStandee";

export function makeStandee(
  grid,
  { initiative = 99, label = "N/A", statuses = [], type, x, y }
) {
  const hex = grid.get({ x, y });

  if (!hex) {
    throw new Error(`Not able to find hex at X,Y, (${x}, ${y}) in gird`);
  }

  if (isStandee(hex)) {
    throw new Error(
      `Hex at X,Y, (${x}, ${y}) is already a standee, ${hex.label}`
    );
  }

  hex.standee = type;
  hex.label = label;
  hex.statuses = statuses;
  hex.initiative = initiative;

  return hex;
}
