import React, { useRef, useEffect } from "react";
import draw from "./webgl.js"

export default function WebglHero() {
	const canvasRef = useRef();
	const frameRef = useRef();

	useEffect(() => {
		var ctx = canvasRef.current.getContext("webgl");
		requestAnimationFrame(() => draw(ctx));

		const handleResize = e => {
			ctx.canvas.width = frameRef.current.clientWidth;
			ctx.canvas.height = frameRef.current.clientHeight;
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="Frame" ref={frameRef} >
			<canvas ref={canvasRef}>
				Your browser does not support the HTML canvas tag.
			</canvas>
		</div >
	);
}
