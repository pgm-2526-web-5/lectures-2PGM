const Circle = ({ width, color }) => {
  const circleStyle = {
    width: width,
    height: width,
    backgroundColor: color,
    borderRadius: "50%",
  };

  return <div className="circle" style={circleStyle}></div>;
};

export default Circle;
