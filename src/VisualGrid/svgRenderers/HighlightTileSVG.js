function HighlightTileSVG(svg) {
  function highlightTile(hex, highlightAttrs) {
    const id = "highlight";
    const point = hex.toPoint();
    const corners = hex.corners();

    const polygonPoints = corners
      .map((corner) => corner.add(point))
      .map(({ x, y }) => `${x},${y}`)
      .join(",");

    const tileAttr = {
      fill: "none",
      "stroke-linejoin": " round",
      "stroke-linecap": " round",
      "stroke-width": " 2",
      ...highlightAttrs,
    };

    return svg.polygon(polygonPoints).attr(tileAttr).data({ id });
  }

  function highlightSourceTile(hex) {
    highlightTile(hex, { stroke: "#336699", "stroke-width": " 6" });
  }

  function highlightTargetTile(hex) {
    highlightTile(hex, { stroke: "#AACC99", "stroke-width": " 2" });
  }

  return {
    highlightSourceTile,
    highlightTargetTile,
  };
}

export default HighlightTileSVG;
