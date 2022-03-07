const findCenterPoint = (hex) => {
  const point = hex.toPoint();
  const center = hex.center();

  const centerPoint = {
    x: point.x + center.x,
    y: point.y + center.y,
  };

  return centerPoint;
};

export default findCenterPoint;
