import React from "react";

export default function WebglHero() {
  React.useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }, []);

  return (
    <div>
      <h1>HTML5 Canvas + React.js</h1>
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}