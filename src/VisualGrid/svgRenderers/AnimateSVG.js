function AnimateSVG(svg) {
  function attachStrobeAnimation(tile) {
    let isAnimated = false;
    const orginalFill = tile.attr().fill;
    const pulseColor = "#f03";

    function end() {
      tile.attr({ fill: orginalFill });
      isAnimated = false;

      return null;
    }

    function start() {
      isAnimated = true;
      let stop1;

      const radial = svg.gradient("radial", function (add) {
        stop1 = add.stop(0.3, pulseColor);
        add.stop(1, orginalFill);
      });

      function doPulse() {
        stop1
          .animate(750, 0, "now")
          .ease(">")
          .update({ color: orginalFill })
          .after(() => {
            stop1.update({ color: pulseColor });
            if (isAnimated) {
              doPulse();
            }
          });
        tile.fill(radial);
      }
      doPulse();

      return end;
    }

    return start;
  }

  function attachHighlightAnimation(tile) {
    const highlightColor = "#ffc";
    const orginalFill = tile.attr().fill;

    function start() {
      tile.attr({ fill: highlightColor });
      return end;
    }

    function end() {
      tile.attr({ fill: orginalFill });
      return null;
    }

    return start;
  }

  return {
    attachStrobeAnimation,
    attachHighlightAnimation,
  };
}

export default AnimateSVG;
