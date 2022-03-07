import terrainToColor from "./util/terrainToColor";

function TileSVG(svg) {
  function renderTile(hex) {
    const id = hex.toString();
    const point = hex.toPoint();
    const corners = hex.corners();

    const polygonPoints = corners
      .map((corner) => corner.add(point))
      .map(({ x, y }) => `${x},${y}`)
      .join(",");

    const tileAttr = {
      fill: terrainToColor(hex.terrain),
      "stroke-linejoin": " round",
      "stroke-linecap": " round",
      "stroke-width": " 2",
      stroke: "#000000",
    };

    return svg
      .polygon(polygonPoints)
      .attr(tileAttr)
      .on("mouseover", () => svg.listeners?.["tile-mouseover"]?.(hex))
      .on("mouseout", () => svg.listeners?.["tile-mouseout"]?.(hex))
      .data({ id });
  }

  return {
    renderTile,
  };
}

export default TileSVG;
