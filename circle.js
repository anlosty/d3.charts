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

var circle = cx="50" cy="50" r="50";


function drawRect (column, row) {
	var startPadding = 30;
	var columnPadding = 30;
	var columnWidth = 20;
	var yStep = 0.5;
	var height = row * yStep;
	var x = (column - 1) * (columnWidth + columnPadding) + startPadding;
	var rect = g.append("rect");
	rect.attr("width", columnWidth);
	rect.attr("height", height);
	rect.attr("x", x);
	rect.attr("y", svgHeight - height);
}

// column - number of class in school
// row - count of missed classes

drawRect(1, 80);
drawRect(2, 100);
drawRect(3, 80);
drawRect(4, 100);