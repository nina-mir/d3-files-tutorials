# This is assignment #2 regarding d3.js
## Intro
- Problem.1 is ploting a bar chart of **the 2017 household median income** of the 50 US states + D.C. using a CSV dataset on [data.world](https://query.data.world/s/7hgntwsiih4wi5f7cqb5pfxxbuqgeu?dws=00000) website.
  You are asked to also plot a horizontal line depicting 2017 avg. US median income on this plot to provide a comparison of each state's value to the national average.  
- Problems 2. and 3. ask you to create click and hover interactions for two seperate grid structures. 

### Problem. 1

You should now be familiar with the process of creating bar charts in d3.js. The challenges in this questions are: 
- Creating two different plots (vertical bars for the 50 states + D.C. and a horizontal line representing the avg. US median income in 2017) on the same figure
- Making sure that the x-axis' label representing the states names are readable as the y-axis values (hint: you would need to rotate the state's names to fit them under the x-axis)
- Implementing a hover effect-1: Upon mouse cursor entering a bar, that bar needs to change color and the x-axis label associated with it needs to become bold font-weight.
- Implementing a hover effect-2: Upon mouse cursor exiting a bar, that bar needs to revert its color to its original color and its assciated x-axis label's font needs to have a regular font-weight. 
> [!Note]
> Please make sure the contrast ratio between the horizontal line&#8212;representing the avg. US value&#8212;and, the bars&#8212;pertaining to each state's data&#8212;meets the [minimum requirement](https://webaim.org/articles/contrast/#sc143) of 4.5:1 ratio.

You can download the associated CSV file for this problem via the following options:

via Python:
```
import pandas as pd
df = pd.read_csv('https://query.data.world/s/bdi6wmtk35zrdgg56zrlle26ljzito?dws=00000')
```
via direct download [link](https://query.data.world/s/7hgntwsiih4wi5f7cqb5pfxxbuqgeu?dws=00000)

data source: https://data.world/garyhoov/household-income-by-state

### Problem. 2

- Create a 10 X 10 grid of square cells on a 300px by 300px `<svg></svg>` element.
- Each cell's width, height and fill color is listed below:

``` 
      .attr('height', 30)
      .attr('width', 30)
      .style('fill', '#4dbeff')
```
- Create a `mouseover` event that is trigerred   
