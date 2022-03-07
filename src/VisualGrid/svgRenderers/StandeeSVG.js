import findCenterPoint from "./util/findCenterPoint";
import standeeToColors from "./util/standeeToColors";

function StandeeSVG(svg) {
  function renderStandee(hex) {
    const centerPoint = findCenterPoint(hex);
    const circleSize = hex?.height() * 0.7;
    const text = hex?.label.toUpperCase();
    const [fill, stroke] = standeeToColors(hex);

    const markerAttr = {
      fill,
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
      "stroke-width": 2,
      stroke,
    };

    const marker = svg
      .circle(circleSize)
      .attr(markerAttr)
      .center(centerPoint.x, centerPoint.y);

    const label = svg.text(text).center(centerPoint.x, centerPoint.y);

    return svg.group().add(marker).add(label);
  }

  return {
    renderStandee,
  };
}

export default StandeeSVG;
