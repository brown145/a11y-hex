function CoordinateSVG(svg) {
  function renderCoordinate(hex) {
    const point = hex.toPoint();
    const height = hex.height();
    const center = hex.center();

    const coordinateAttr = {
      stroke: "none",
      fill: "rgba(0, 0, 0, 0.5)",
      "font-size": "10px",
    };

    return svg
      .text(hex.toString())
      .dmove(point.x + center.x, point.y + height / 2)
      .attr(coordinateAttr);
  }

  return {
    renderCoordinate,
  };
}

export default CoordinateSVG;
