import React, { useRef, useEffect } from "react";
import { setup } from "./webgl.js"

export default function WebglHero() {
	const canvasRef = useRef();
	const frameRef = useRef();

	useEffect(() => {
		var gl = canvasRef.current.getContext("webgl2");

		const mountWebgl = async () => {
			const render = await setup(gl);
			requestAnimationFrame(() => render());
		}

		mountWebgl();

		const handleResize = e => {
			const { width, height } = frameRef.current.getBoundingClientRect();
			gl.canvas.height = height - 2.5;
			gl.canvas.width = width - 2;
			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
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
