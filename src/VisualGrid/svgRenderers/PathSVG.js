import { colors } from "../../theme";
import findCenterPoint from "./util/findCenterPoint";

function PathSVG(svg) {
  function renderPath(hexes, config = {}) {
    const hexesClone = [...hexes].reverse();
    const group = svg.group();

    let startHex = hexesClone.pop();
    let endHex = hexesClone.pop();

    while (endHex) {
      group.add(renderPathSegment(startHex, endHex, config));

      startHex = endHex;
      endHex = hexesClone.pop();
    }

    if (!!config.pathEndPoint) {
      group.add(renderAttackPoint(startHex));
    }

    return group;
  }

  function renderPathSegment(hex1, hex2, config = {}) {
    const center1 = findCenterPoint(hex1);
    const center2 = findCenterPoint(hex2);

    const lineAttr = {
      "stroke-width": config.weight * 2 || 2,
      "stroke-linejoin": " round",
      "stroke-linecap": " round",
      stroke: config.color || colors["Selective Yellow"],
    };

    const line = svg
      .line(center1.x, center1.y, center2.x, center2.y)
      .attr(lineAttr);

    return line;
  }

  function renderAttackPoint(hex) {
    const center = findCenterPoint(hex);
    return svg.circle(3).center(center.x, center.y);
  }

  return {
    renderPath,
  };
}

export default PathSVG;
