import "./KeyBindings.css";

import React from "react";
import { useGridDispatch } from "../contexts/GridContext";
import { useHotkeys } from "react-hotkeys-hook";

const keyToCompassDir = (key) => {
  switch (key) {
    case "w":
      return "NW";
    case "e":
      return "NE";
    case "a":
      return "W";
    case "d":
      return "E";
    case "z":
      return "SW";
    case "x":
      return "SE";
    default:
      return ""; // TODO
  }
};

const TARGET_MOVEMENT_KEYBINDINGS = {
  s: "recenter target to source",
  w: "move target NW",
  e: "move target NE",
  a: "move target W",
  d: "move target E",
  z: "move target SW",
  x: "move target SE",
};

const TARGET_MOVEMENT_HOTKEYS = Object.keys(TARGET_MOVEMENT_KEYBINDINGS).join(
  ","
);

const SOURCE_MOVEMENT_KEYBINDINGS = {
  "shift+s": "set current target as source",
};

const SOURCE_MOVEMENT_HOTKEYS = Object.keys(SOURCE_MOVEMENT_KEYBINDINGS).join(
  ","
);

const KeyBindings = () => {
  const dispatch = useGridDispatch();

  const handleTargetKey = React.useCallback(
    ({ key }) => {
      switch (key) {
        case "s":
          dispatch({ type: "set-target-to-source" });
          break;
        default:
          dispatch({
            type: "move-target",
            payload: { compassDirection: keyToCompassDir(key) },
          });
          break;
      }
    },
    [dispatch]
  );

  const handleSourceKey = React.useCallback(
    () =>
      dispatch({
        type: "set-source-to-target",
      }),
    [dispatch]
  );

  useHotkeys(TARGET_MOVEMENT_HOTKEYS, handleTargetKey);
  useHotkeys(SOURCE_MOVEMENT_HOTKEYS, handleSourceKey);

  return (
    <section className="key-bindings">
      <div>
        <h2>Target Movement</h2>
        <dl>
          {Object.entries(TARGET_MOVEMENT_KEYBINDINGS).map(([key, value]) => (
            <React.Fragment key={key}>
              <dt>
                <span className="key-binding">{key}</span>
              </dt>
              <dd>{value}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
      <div>
        <h2>Source Movement</h2>
        <dl>
          {Object.entries(SOURCE_MOVEMENT_KEYBINDINGS).map(([key, value]) => (
            <React.Fragment key={key}>
              <span className="key-binding">{key}</span>
              <dd>{value}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
      <div>
        <h2>Another set</h2>
      </div>
    </section>
  );
};

export default KeyBindings;
