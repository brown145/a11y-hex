import HighlightTileSVG from "./HighlightTileSVG";
import OverlaySVG from "./OverlaySVG";
import StandeeSVG from "./StandeeSVG";
import TileSVG from "./TileSVG";
import hasOverlay from "./util/hasOverlay";
import hasStandee from "./util/hasStandee";

function ScenrioRenderer(scenrio, svg) {
  // use groups to create Layers; regardless of paint order
  const tileLayer = svg.group().addClass("tileS-layer");
  const tileSVG = TileSVG(tileLayer);
  const overlaySVG = OverlaySVG(svg.group().addClass("overlayS-layer"));
  const highlightSVG = HighlightTileSVG(svg.group().addClass("svg-highlights"));
  const standeeSVG = StandeeSVG(svg.group().addClass("standeeS-layer"));

  function renderTiles() {
    scenrio.forEach((hex) => {
      tileSVG.renderTile(hex);
    });
  }

  function renderCoordinates() {
    const coordinates = [];

    function showCoordinates() {
      scenrio
        .filter((hex) => !hasStandee(hex))
        .filter((hex) => !hasOverlay(hex));

      return coordinates;
    }

    function hideCoordinates() {
      coordinates.forEach((coord) => coord.remove());
      return coordinates;
    }

    scenrio.toggleCoordinates = (doShow) => {
      if (doShow) {
        showCoordinates();
      } else {
        hideCoordinates();
      }
    };
  }

  function renderStandees() {
    scenrio.filter(hasStandee).forEach((hex) => {
      standeeSVG.renderStandee(hex);
    });
  }

  function renderOverlays() {
    scenrio.filter(hasOverlay).forEach((hex) => {
      overlaySVG.renderOverlay(hex);
    });
  }

  function highlightSource(hex) {
    if (hex) {
      highlightSVG.highlightSourceTile(hex);
    }
  }

  function highlightTarget(hex) {
    if (hex) {
      highlightSVG.highlightTargetTile(hex);
    }
  }

  function init() {
    renderTiles();
    renderCoordinates();
    renderStandees();
    renderOverlays();
  }

  return {
    init,
    renderCoordinates,
    renderOverlays,
    renderStandees,
    renderTiles,
    highlightTarget,
    highlightSource,
  };
}

export default ScenrioRenderer;
