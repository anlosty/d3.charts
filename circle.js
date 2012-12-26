function half (val) {
	return val / 2;
}
var svgWidth = 1000;
var svgHeight = 500;
var body = d3.select("body");
var svg = body.append("svg");
svg.attr("width", svgWidth);
svg.attr("height", svgHeight);

var g = svg.append("g");

function drawCircle (r, cx, cy) {
	var circle = g.append("circle");
	circle.attr("r", r);
	circle.attr("cx", cx);
	circle.attr("cy", cy);
}

drawCircle(30, 100, 100);
drawCircle(20, 150, 50);
drawCircle(50, 250, 150);
