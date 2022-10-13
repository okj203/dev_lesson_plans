<!-- 
+ Note: Begin with the setup of the `index.html` and `styl.css`. The demo is complete once everything in `solution.css` is added to `style.css`.  
-->

0. Let's check out what we currently have in the index.html and style.css. We're going to upgrade the current layout of the page using flexbox and grid.

1. If we look at the finished design, looks like we'll need 4 columns, including the "About Me" section.

<!-- Typing "div.grid-container" in the html file will create a div element with the class of grid-container -->

```css
.grid-container {
    display: grid;
    /* 
    If we only write:
    grid-template-columns: 200px; we'll only get everything in 1 column. We can add 200px 4 times (200px 200px 200px 200px) but it won't fill up the whole screen, so we can either use % to assign 25% to each of the 4 columns or use fr instead.

    grid-template-columns:1fr 1fr 1fr 1fr; 

    fr (fraction) allows us to fill up the whole browser with our content. Width of our columns will change dynamically depending on the size of the browser.
    */
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px 200px auto 200px 200px 50px;
    /* header - slogan - main - main - main - footer */
}
```

2. Let's make the header to take over the entire width. We can surely use the `grid-area`, but easier way to do it would be to use `grid-column` with `span`. 
```css
.header {
    background-color: aliceblue;
    /* 
    grid-column:span 4; 
    
    would tell this element to take up 4 columns.
    OR we can also specify the starting column and the ending column.
    1/-1 means from the 1st column all the way to the last column.
    */
    grid-column: 1/-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    width: 30%;
}
```

3. Let's make the slogan to take over the entire width.

```css
.slogan {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
```

4. Main will only take up 3 columns and rows

```css
.main {
    grid-column: span 3;
    grid-row: span 3;
    /* 
    grid-column and grid-row will let us decide how many columns and rows we want this element to take up.
    */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 16px 0;
}

.recipe-card {
    background-color: aliceblue;
    width: 250px;
    height: 370px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 5px 5px 20px gray;
    /* box-shadow: horizontal, vertical, blur, color */
}
```

5. Sidebar
```css
.sidebar {
    /* No need to change the column since it already takes 1 column and that's all I need for the sidebar. I just want it to be slightly longer, so we can change the grid-row */
    grid-row: span 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
```

6. Footer
```css
.footer {
    /* We don't need our footer to take more than 1 row, so no need to chanage the grid-row. We can specify grid-column. */
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

