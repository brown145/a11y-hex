import "./VisualGrid.css";

import React from "react";
import { SVG } from "@svgdotjs/svg.js";
import ScenrioRenderer from "./svgRenderers/ScenrioRenderer";
import removeAllChildNodes from "./svgRenderers/util/removeAllChildNotes.js";
import { useGridState } from "../contexts/GridContext";

const VisualGrid = () => {
  const SVGref = React.createRef();
  const scenarioSVG = React.createRef();
  const { grid, targetHex, sourceHex } = useGridState();

  // let scenrioSVG;

  React.useEffect(() => {
    if (grid) {
      removeAllChildNodes(SVGref.current);
      const svg = SVG().addTo(SVGref.current).size("100%", "100%");
      scenarioSVG.current = ScenrioRenderer(grid, svg);
      scenarioSVG.current.init();
    }
  }, [SVGref, grid, scenarioSVG]);

  // TODO: need to use z-index to insure highlight over source?
  React.useEffect(() => {
    if (scenarioSVG.current && sourceHex) {
      scenarioSVG.current.highlightSource(sourceHex);
    }
  }, [SVGref, scenarioSVG, sourceHex]);

  React.useEffect(() => {
    if (scenarioSVG.current && targetHex) {
      scenarioSVG.current.highlightTarget(targetHex);
    }
  }, [SVGref, scenarioSVG, targetHex]);

  return (
    <>
      <section ref={SVGref} className="visualGrid" />
    </>
  );
};

export default VisualGrid;
