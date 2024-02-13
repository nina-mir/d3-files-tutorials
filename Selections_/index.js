// manipulating the DOM using d3.js
// Uncomment the following lines Or add more elements/styling

// select an element
const heading = d3.select("h1").node();
console.log(heading.textContent)

//add nodes to the DOM
const body = d3.select("body")

//create a div element with ID test
const container = body.append("div").attr("id", "text");

// container.append("p").text("Feb.7 demo @ SF State!").style("background-color", "yellow");


container.append("p").text("AI revolution!");

container.append("p").text("Federal Minimum Wage is not fair!!");
container.append("p").text("I want to work for Google!");

// selectAll demo
// d3.selectAll("p").style("background-color", "pink");