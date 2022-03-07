import "./VisualGrid.css";

import React from "react";
import { SVG } from "@svgdotjs/svg.js";
import ScenrioRenderer from "./svgRenderers/ScenrioRenderer";
import removeAllChildNodes from "./svgRenderers/util/removeAllChildNotes.js";
import { useGridState } from "../contexts/GridContext";

const VisualGrid = () => {
  const SVGref = React.createRef();
  const { grid, targetHex, sourceHex } = useGridState();

  let scenrioSVG;

  React.useEffect(() => {
    if (grid) {
      removeAllChildNodes(SVGref.current);
      const svg = SVG().addTo(SVGref.current).size("100%", "100%");
      scenrioSVG = ScenrioRenderer(grid, svg);
      scenrioSVG.init();
    }
  }, [SVGref]);

  // TODO: need to use z-index to insure highlight over source?
  React.useEffect(() => {
    if (scenrioSVG && sourceHex) {
      scenrioSVG.highlightSource(sourceHex);
    }
  }, [SVGref, scenrioSVG, sourceHex]);

  React.useEffect(() => {
    if (scenrioSVG && targetHex) {
      scenrioSVG.highlightTarget(targetHex);
    }
  }, [SVGref, scenrioSVG, targetHex]);

  return (
    <>
      <section ref={SVGref} className="visualGrid" />
    </>
  );
};

export default VisualGrid;
