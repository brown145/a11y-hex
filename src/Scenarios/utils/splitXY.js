const splitXY = (xy) =>
  (([x, y]) => ({ x: Number(x), y: Number(y) }))(xy.split(","));

export default splitXY;
