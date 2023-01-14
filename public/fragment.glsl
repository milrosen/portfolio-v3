#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

    // we need to declare an output for the fragment shader
out vec4 outColor;

void main() {
	outColor = vec4(fract((gl_FragCoord.xy) / u_resolution), fract(u_time), 1);
}