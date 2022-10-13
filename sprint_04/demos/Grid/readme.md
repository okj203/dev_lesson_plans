0. Begin with a basic HTML setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>Grid</title>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item grid-item-1">1</div>
        <div class="grid-item grid-item-2">2</div>
        <div class="grid-item grid-item-3">3</div>
        <div class="grid-item grid-item-4">4</div>
        <div class="grid-item grid-item-5">5</div>
    </div>
</body>
</html>
```
1. Basic CSS setup
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.grid-item{
    font-size:30px;
}
.grid-item-1{
    background-color: pink;
}
.grid-item-2{
    background-color: green;
}
.grid-item-3{
    background-color: blue;
}
.grid-item-4{
    background-color: brown;
}
.grid-item-5{
    background-color: purple;
}
```
2. Just like flex, grid items take up as much width as possible by default, but I can also limit the width of individual items.
```css
.grid-item-1{
    background-color: pink;
    width:50%;
}
```

3. Comment out the width:
```css
.grid-item-1{
    background-color: pink;
    /* width:50%; */
}
```

4. Finally let turn this into a grid layout. We'll first write "display: flex" and specify the number of columns we want. There are a few ways to do this.
```css
.grid-container{
 display:grid;
 /* Unlike display:flex, grid does not arrange everything in a row by default like flex does. For grid, you need to specify how you want it to behave. 
 
 + Note: Comment out to have only one "grid-template-columns" property at a time during this part of the demo!
 */
 grid-template-columns:200px 200px 200px;
 /* By specifying 200px THREE times, I can create 3 columns and each column is assigned 200px width. */
 grid-template-columns:2fr 1fr;
 /* "fr" stands for "fraction" and it applies width by ratio. i.e. "1fr 1fr" would create 2 columns where the width of each column would be 50% of the entire browser, since it needs to be 1:1 ratio. "2fr 1fr" would assign 2/3 of the entire browser width to the first column and the rest of the 1/3 of the browser width to the second column. */
 grid-template-columns:repeat(4, 100px);
 /* repeat takes 2 arguments, where the first argument specifies number of the columns and the second argument specifies the width of each column */
}
```

5. Let's comment out the above and try something else.
```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(3,200px);
}
```

6. Let's say that I want a certain height for each row.
```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows: 250px 300px;
    /* If I only want to give a width to the first row, then I only need to write 250px. 250px 300px means 250px height for the first row, 300px height for the second row. */
    grid-auto-rows:100px;
    /* Set a default row height for all rows in case there are numerous rows. When it's used with grid-template-rows, grid-aut-rows is applied to whatever that comes after the rows specified by grid-template rows */
    grid-column-gap:10px;
    /* Add 10px of space between the columns */
    grid-row-gap:20px;
    /* Add 20px of space between rows */
    grid-gap:10px;
    /* Or add spaces to both. If only 10px is given, it will be applied to both rows and columns. */
}
```
7. Let's comment out `grid-column-gap` and `grid-row-gap`. Let's say that we have a large amount of text. Let's replace our "5" in the <div> with `lorem200`. Because we've assigned a certain row height, the text overflows the grid item. There's a way to work around for when we have this kind of issue. 

Let's first comment out the above and add this instead:

```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows: 250px;
    grid-auto-rows:minmax(100px, auto);
    /* 
    I want my grid-auto-rows to set the default row height as 100px but I want it to change dynamically if there are lots of text and the default row height is simply not enough to contain all the text.

    Then I can use:

    grid-auto-rows: minmax(100px, auto);

    It means 100px min height, but automatically grow to contain all the text.
    */
    grid-gap:10px;
}
```

8. Let's comment out the above and add this to talk about `grid-template-areas` to see how we can make individual grid item more dynamic.
```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows: 250px;
    grid-auto-rows:minmax(100px,auto);
    grid-gap:20px;
    grid-template-areas: 
    "header header header";
}

.grid-item-1{
    grid-area:header;
}
```
`grid-template-areas` and `grid-area` work together to assign certain areas of the grid to a specific element. As long as the values in the template-areas match with the grid-area property, it works. You don't need to name them header, you can name them banana as long as they match. If you write `header header` ("header" twice instead of 3 times) then only 2 areas of the grid will be assigned to the `grid-item-1`.

We can do the same for other grid items:

```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows: 250px;
    grid-auto-rows:minmax(100px,auto);
    grid-gap:20px;
    grid-template-areas: 
    "header header header"
    "sidebar content content"
    "sidebar content content"
    "sidebar content content";
    /* Each line above represents a row in the grid. */
}

.grid-item-1{
    grid-area:header;
}
.grid-item-2{
    grid-area:sidebar;
}
.grid-item-3{
    grid-area:content;
}
```

9. We can comment out the above and see how else we can accomplish this. We can use `grid-column-start` and `grid-column-end`:
```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(4,200px);
    grid-template-rows: 250px;
    grid-auto-rows:minmax(100px,auto);
    grid-gap:10px;
}

.grid-item-1{
    grid-column-start:1;
    grid-column-end: -1;
    /* -1 will ensure that the grid element takes the item to take over all the columns from the first column all the way to the last one. 
    
    Otherwise, we can specify the ending column:
    
    grid-column-end:4;

    If we assign 4 as the ending column, it stops at the third column, because it counts the gap from the beginning (where the grid begins), and ends up taking 3 columns.
    */
}
```

10. We can comment out `grid-column-start` and `grid-column-end`, and instead use `grid-column: span 3`.

```css
.grid-item-1{
    /* grid-column-start:1;
    grid-column-end: -1; */
    grid-column: span 3;
    /* span simply takes up 3 columns. */
}
```

11. Let's comment out both `.grid-contaier` and `.grid-item-1` and try one last thing:

```css
.grid-container{
    display:grid;
    grid-template-columns:repeat(4,200px);
    grid-template-rows: 250px;
    grid-auto-rows:minmax(100px,auto);
    grid-gap:10px;
    background-color: aquamarine;
    height:100vh;
    /* vh stands for "viewport height" and 100vh means entire height or width of the browser */
    justify-content:center;
    /* Horizontal alignment */
    align-content:center;
    /* Vertical alignment- notice that it's "align-CONTENT" not "align-items". Just like flexbox, if you don't specify align-content, it'll asign "stretch" as the default value and stretch the items to take up as much space as possible. 
    
    You can also change the alignment using justify-content. Notice for flex it's called "flex-start" and "flex-end" but for grid it's just "start" and "end".

    justify-content:start;
    justify-content:end;
    */
}
```