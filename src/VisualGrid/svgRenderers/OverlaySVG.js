import findCenterPoint from "./util/findCenterPoint";
import overlayToColors from "./util/overlayToColors";

function OverlaySVG(svg) {
  function renderOverlay(hex) {
    const centerPoint = findCenterPoint(hex);
    const circleSize = hex?.height() * 0.5;
    const text = hex?.label.toUpperCase();
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

    const label = svg.text(text).center(centerPoint.x, centerPoint.y);

    return svg.group().add(marker).add(label);
  }

  return {
    renderOverlay,
  };
}

export default OverlaySVG;
