import React from "react";
import scenrio from "../Scenrio/scenrio";

const GridStateContext = React.createContext();
const GridDispatchContext = React.createContext();

const defaultState = {
  grid: scenrio,
  sourceHex: scenrio.get(),
  targetHex: scenrio.get(),
};

const gridReducer = (state, action) => {
  const { type, payload } = action;
  let { targetHex, sourceHex } = state;

  switch (type) {
    case "move-target":
      targetHex = moveHexReducer(targetHex, payload.compassDirection);
      break;
    case "set-target-to-source":
      targetHex = setHexReducer(targetHex, sourceHex);
      break;
    case "set-source-to-target":
      sourceHex = setHexReducer(sourceHex, targetHex);
      break;
    default:
    // no-op
  }

  return {
    ...state,
    targetHex,
    sourceHex,
  };
};

const moveHexReducer = (currentHex, compassDirection) => {
  if (!currentHex || !compassDirection) {
    return currentHex;
  }

  const newHex = scenrio.neighborsOf(currentHex, compassDirection)[0];
  return newHex ? newHex : currentHex;
};

const setHexReducer = (currentHex, newHex) => {
  if (!newHex) {
    return currentHex;
  }

  return newHex;
};

const GridProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(gridReducer, defaultState);

  return (
    <GridStateContext.Provider value={state}>
      <GridDispatchContext.Provider value={dispatch}>
        {children}
      </GridDispatchContext.Provider>
    </GridStateContext.Provider>
  );
};

const useGridState = () => {
  const context = React.useContext(GridStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
};

const useGridDispatch = () => {
  const context = React.useContext(GridDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
};

const useGrid = () => {
  return [useGridState(), useGridDispatch()];
};

export { GridProvider, useGrid, useGridState, useGridDispatch };
