// var url = "https://github.com/nina-mir/data_visualization_course_project/blob/master/public/javascripts/geospatial_hoods_83k.js"

var width = 800;
var height = width * (0.8);

var svg = d3.select('#map_map')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style("bordr", "10px solid red")
    .style("margin", "90px 30px 30px 150px")

var g = svg.append('g');

var scale = 300000,
    latitude = 37.7750,
    longitude = -122.4183;


var albersProjection = d3.geoAlbers()
    .scale(scale)
    .rotate([-longitude, 0])
    .center([0, latitude])
    .translate([width / 2, height / 2]);

var geoPath = d3.geoPath()
    .projection(albersProjection);


// Define the div for the tooltip
// var div = d3.select("#answer").append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

g.selectAll('path')
    .data(neighborhoods_json.features)
    .enter()
    .append('path')
    .attr('fill', '#d4d4d4')
    .attr('stroke', '#000000')
    .attr('d', geoPath)
    .attr('fill-opacity', function (d, i) { return 1; })
    .on("mouseover", function (d) {
        d3.select(this).style("fill", "black");
    })
    .on("mouseout", function (d) {
        d3.select(this).style("fill", "#d4d4d4");

    })
    .on("click", function (d) {
        d3.select(this).style("fill", "red");
    })

// function (d) {
// console.log(d.properties.nhood, d3.select(d));
// d3.select(this)
//     .classed("active", true);
// div.transition()
//     .duration(200)
//     .style("opacity", 0.9);

// div.html(d.properties.nhood + "<br/>")
//     .style("left", 0 + "px")
//     .style("top", 0 + "px");
// })
// .on("mouseout", function (d) {
//     d3.select(this)
//         .classed("active", false);
//     div.transition().duration(500)
//         .style("opacity", 0);
// });




/* d3.json(url).then(function(bb) {  let width = 200, height = 200;
   let projection = d3.geoEqualEarth();
   projection.fitSize([width, height], bb);
   let geoGenerator = d3.geoPath()
   .projection(projection);
 
   let svg = d3.select("body").append('svg')
   .style("width", width).style("height", height);

  svg.append('g').selectAll('path')
  .data(bb.features)
  .join('path')
  .attr('d', geoGenerator)
  .attr('fill', '#088')
  .attr('stroke', '#000');
 });*/
