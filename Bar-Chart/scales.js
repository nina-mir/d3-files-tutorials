// javascript  Displaying the importance of scaling when dealing with smaller data magnitude
//var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = [1, 2, 3, 4, 5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('.scales')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight - 20]);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        console.log(yScale(d));
        return svgHeight - yScale(d)
    })
    .attr("height", function (d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i];
        return "translate(" + translate + ")";
    });


// var text = svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text(function (d) {
//         return d;
//     })
//     .attr("y", function (d, i) {
//         return svgHeight - yScale(d) - 2;
//     })
//     .attr("x", function (d, i) {
//         return barWidth * i;
//     })
//     .attr("fill", "blue");