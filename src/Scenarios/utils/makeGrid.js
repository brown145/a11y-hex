import * as Honeycomb from "honeycomb-grid";

export function makeGrid({
  orientation = "pointy",
  offset = 0,
  height,
  width,
}) {
  const Hex = Honeycomb.extendHex({ orientation, offset, size: 30 });
  const Grid = Honeycomb.defineGrid(Hex);

  return Grid.rectangle({ height, width });
}
