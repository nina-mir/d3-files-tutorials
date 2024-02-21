# d3.js excercise problems

> [!NOTE]
> The following problems are based on the code available in this repo.
> Your answers to Problem 1 and 2 need to be on the same index.html file. Feel free to use the sample HTML page in this folder.Your Javascript code need to be inline between \<script>\</script> on the index.html file.

1.      Manipulating the DOM
    - Using d3.js, add a button element to the index.html's body element. The button text should be **add a circle**
    - Add a div element to the DOM's body using d3.js. Assign an id value of **container** to this \<div> element
    - Add a svg element as a child of **container** div that you created above (svgWidth, svgHeight= **600px**). Assign an id value of **Problem-1** to this svg element.
    - Write a function that adds a [circle element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) \<circle> to the SVG element. The function has no input but returns the newly created circle.
    > More info about the circle element:<br>
    The **cx** and **cy** of this element needs to be a random value between 100 to 500. You could use any JavaScript function or d3 random number generation [functions](https://d3js.org/d3-random#randomInt). <br>
    The **radius** of this cricle needs to be a random number betweeen 10 to 60.<br>
    This function needs to assign a **random color** to the created circle element. More info & examples is found [here](https://d3-graph-gallery.com/graph/custom_color.html).
    - Assign the created function above to the click event of the button **add a circle**
    - **Verify** that upon clicking the button a circle element is added to the SVG element You could use the Inspect Element of your browser's Developer Tools to help you debug.

2.      Create a bar chart

    - Create bar chart w/both  X & Y axes for the following dataset:

        [30, 50, 60, 190, 400, -50]
        Your bar chart needs to be rendered on a svg element with an id value of Problem-2 on the same index.html file found on this repo and used for Problem 1 above.

    - Add a text element to each bar to dispay its value. You can decide where you'd like to place the text elements in relation to the bars. E.g., a text element can be on the top/bottom/center/etc of each bar.
    - Verify that the bars' color and text color meet the accessibility contrast value of 4.5:1. Use this online tool to check your color contrast: <https://webaim.org/resources/contrastchecker/>
