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

function drawCircle (x, y, radius) {
	var startPadding = 30;
	var columnPadding = 30;
	var columnWidth = 20;
	var yStep = 0.5;
	var height = row * yStep;
	var x = (column - 1) * (columnWidth + columnPadding) + startPadding;
	var circle = g.append("circle");
	circle.attr("radius", 50);
	circle.attr("x", 30);
	circle.attr("y", 30);
}

// column - number of class in school
// row - count of missed classes

drawCircle(10, 30, 5);
drawCircle(20, 30, 5);
drawCircle(40, 30, 10);
