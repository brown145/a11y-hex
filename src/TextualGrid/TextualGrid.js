import React from "react";
import { useGridState } from "../contexts/GridContext";

const TextualGrid = () => {
  const { targetHex, sourceHex } = useGridState();
  return (
    <>
      <section className="xx">
        game state: turn number, active elements, scenrio number, current player
      </section>
      <section className="xx">
        source {`x:${sourceHex.x} y:${sourceHex.y}`}
      </section>
      <section className="xx">
        target {`x:${targetHex.x} y:${targetHex.y}`}
      </section>
      <section className="xx">
        sourde to target details: distance in hexes, distance in movement,
        line-of-sight, hexes between
      </section>
    </>
  );
};

export default TextualGrid;
