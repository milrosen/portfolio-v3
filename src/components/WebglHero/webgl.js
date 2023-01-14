async function setup(gl) {

	const fragmentShaderSource = await (await fetch('fragment.glsl')).text();
	const vertexShaderSource = await (await fetch('vertex.glsl')).text();

	console.log(vertexShaderSource);

	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

	const program = createProgram(gl, vertexShader, fragmentShader);

	// look up where the vertex data needs to go.
	const positionAttributeLocation = gl.getAttribLocation(program, "a_position");

	// look up uniform locations
	const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
	const timeLocation = gl.getUniformLocation(program, "u_time");

	const vao = gl.createVertexArray();

	// and make it the one we're currently working with
	gl.bindVertexArray(vao);

	// Create a buffer to put three 2d clip space points in
	const positionBuffer = gl.createBuffer();

	// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	// fill it with a 2 triangles that cover clip space
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		-1, -1, // first triangle
		1, -1,
		-1, 1,
		-1, 1, // second triangle
		1, -1,
		1, 1,
	]), gl.STATIC_DRAW);

	// Turn on the attribute
	gl.enableVertexAttribArray(positionAttributeLocation);

	// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
	gl.vertexAttribPointer(
		positionAttributeLocation,
		2, // 2 components per iteration
		gl.FLOAT, // the data is 32bit floats
		false, // don't normalize the data
		0, // 0 = move forward size * sizeof(type) each iteration to get the next position
		0, // start at the beginning of the buffer
	);

	return setRenderContext({
		gl: gl,
		program: program,
		vao: vao,
		resolutionLocation: resolutionLocation,
		timeLocation: timeLocation
	})
}

function setRenderContext({
	gl,
	program,
	vao,
	resolutionLocation,
	timeLocation
}) {
	return function render(time) {
		time *= 0.001; // convert to seconds

		// Tell WebGL how to convert from clip space to pixels
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

		// Tell it to use our program (pair of shaders)
		gl.useProgram(program);

		// Bind the attribute/buffer set we want.
		gl.bindVertexArray(vao);

		gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
		gl.uniform1f(timeLocation, time);

		gl.drawArrays(
			gl.TRIANGLES,
			0, // offset
			6, // num vertices to process
		);

		requestAnimationFrame(render);
	}
}

function createShader(gl, type, source) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (success) {
		return shader;
	}

	console.log(gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (success) {
		return program;
	}

	console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
}


export {
	setup,
};