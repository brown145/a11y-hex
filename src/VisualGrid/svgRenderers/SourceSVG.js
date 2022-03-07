import findCenterPoint from "./util/findCenterPoint";
import overlayToColors from "./util/overlayToColors";

function SourceSVG(svg) {
  function renderSource(hex) {
    const centerPoint = findCenterPoint(hex);
    const circleSize = hex?.height() * 0.5;
    const [fill, stroke] = overlayToColors(hex);

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

    return svg.group().add(marker);
  }

  return {
    renderSource,
  };
}

export default SourceSVG;
