//API to fetch historical data of Bitcoin Price Index | credint: Scrimba course code!
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

/** CASE - 1 : Asyn API data
 * Loading data from API when DOM Content has been loaded'.
 * After the data is loaded and parsed, the draw function will be called 
 * to draw chart and whatnot. 
 */
document.addEventListener("DOMContentLoaded", function (event) {
    fetch(api)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            var parsedData = parseData(data);
            // drawChart(parsedData);
            console.log(parsedData);
        })
        .catch(function (err) { console.log(err); })
});

/**
 * Parse data into key-value pairs  | Credit Scrimba course
 * @param {object} data Object containing historical data of BPI
 */
function parseData(data) {
    var arr = [];
    for (var i in data.bpi) {
        arr.push({
            date: new Date(i), //date
            value: +data.bpi[i] //convert string to number
        });
    }
    return arr;
}

// CASE 2 -- Static data


var dataset = [100, 200, 300, 400, 500];

var paragraphs = d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p') // appends paragraph for each data element
    //.text('D3 is awesome!!');
    .text(function (d) { return d; });
