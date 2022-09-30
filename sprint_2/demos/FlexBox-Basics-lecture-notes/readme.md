0. Let's quickly go over what we have in the html before we try using some of the most important flex properties.

1. Define a flex container

```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
}
```

QUESTION:
Why do all divs (.item) has the width of inline items with the height of 100% as soon as we add `display: flex`?
-> B/c upon adding `display: flex`, `align-items: stretch` gets applied automatically.

If you don't specify the height of the flex items (aka children elements of a flex container), they automatically take the height of their parent, b/c by default, the align-items property is set to "stretch".

2. Set `align-items: center`
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  align-items: center;
}
```

3. Add height to the item
```css
.item{
  height: 120px;
}
```

4. At this point, if we comment out `align-items: center;`, the items won't take up the whole height, because they have a specific height assigned to them.

```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  /* align-items: center; */
}
```

`align-items: stretch` does not work if you have a fixed height.

5. Add `justify-content: center;` and try all the other values, such as space-evenly, space-around, etc.

```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-evenly; */
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  /* justify-content: flex-end; */
}
```

So far, it's been mostly about `align-items` and `justify-content`.

---

6. Add `flex-direction: column;` to place all items vertically
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  align-items: center; /* vertical */
  justify-content: center; /* horizontal */
  flex-direction: column;
}
```

When the `flex-direction` is set to be `column`, `justify-content` works for vertical alignment and `align-items` works for horizontal alignment - basically they switch.

7. Comment out below:
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  align-items: center; 
  /* justify-content: center; horizontal */
  /* flex-direction: column; */
}
```

Duplicate the 3 div items twice to have 9 of them:
```html
  <div class="container">
    <div class="item item-one">This is the first box</div>
    <div class="item item-two">This is the second box</div>
    <div class="item item-three">This is the third box</div>
    <div class="item item-one">This is the first box</div>
    <div class="item item-two">This is the second box</div>
    <div class="item item-three">This is the third box</div>
    <div class="item item-one">This is the first box</div>
    <div class="item item-two">This is the second box</div>
    <div class="item item-three">This is the third box</div>
  </div>
```
Now everything is squeezed in the same row, ignoring the width 120px, due to `display: flex`, but if I don't want this behavior and want them to wrap around to the next row, we can use `flex: wrap;` 

8. Add `flex-wrap: wrap;`
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  align-items: center; 
  /* justify-content: center; horizontal */
  /* flex-direction: column; */
  flex-wrap: wrap;
}
```
Now the `width: 120px` of the items is maintained even when the browser changes its size. In other word, our app is more responsive, meaning it can be used for both desktop, tablet, or mobile devices.

---
Time for a challenge. Let's create our page to look like the challenge image. 

9. Update the html as below:
```html
  <div class="container">
    <div class="container-one">
      <div class="item item-one">This is the first box</div>
      <div class="item item-two">This is the second box</div>
      <div class="item item-three">This is the third box</div>
    </div>
    <div class="container-two">
      <div class="item item-one">This is the first box</div>
      <div class="item item-two">This is the second box</div>
      <div class="item item-three">This is the third box</div>
    </div>
    <div class="container-three">
      <div class="item item-one">This is the first box</div>
      <div class="item item-two">This is the second box</div>
      <div class="item item-three">This is the third box</div>
    </div>
  </div>

```

10. First we update the container:
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
}
```

11. Then we make each of them a flex container
```css
.container-one, .container-two, .container-three {
  margin: 10px;
  display: flex;
}
```

12. But now they are all in one line, so we add `flex-direction: column;` to the parent container
```css
.container{
  background-color:yellow;
  height:650px;
  display: flex;
  flex-direction: column;
  /* 
  also center it by adding below.
  b/c of the flex-direction: column,
  align-items: center works for placing the items in the center, horizontally, and justify-content: center places the items in the center, veritcally. They've switched their roles unlike when the flex-direction was row by default. 
  */
  align-items: center;
  justify-content: center;
}
```

13. Turn each container into a flex-container
```css
.container-one, .container-two, .container-three {
  margin: 10px;
  display: flex;
}
```

14. Reverse the flex direction for the container-two
```css
.container-two {
  flex-direction: row-reverse;
}
```

15. Finally try to use `justify-content: space-between;` and we run into an issue:
```css
.container-one {
  justify-content: space-between;
  /* 
  justify-content:space-between ALONE does not work. 
  Try adding background-color, but it won't show, 
  meaning the items are taking up the entire width and we don't have any extra space. So we give some padding and it finally shows. 
  */
  background-color: pink;
  padding: 10px;
  /* 
  Add width with % and it should work now.
  In a flex container, the total width of the child items become the total width of the parent container, IF no width is specified for the container.
  */
  width: 80%;
  /* The items are being responsive. Using % is better than using px. */
}
```
---
16. Let's talk about box model. Let's comment out `container-one` and `container-two`in the html file.

17. Also comment out below:

```css
.container-one {
  /* justify-content: space-between;
  background-color: pink;
  padding: 10px;
  width: 80%; */
}

.container{
  /* background-color:yellow;
  height:650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
}

.container-one, .container-two, .container-three {
  margin: 10px;
  /* display: flex; */
}
```

Let's also only leave the `container-one` and comment out the other two.

18. If we give padding to the green item, how will it change? Will it get bigger?

```css
.item-one{
  padding: 20px;
  border: solid 5px black;
}
```
It does! Now the width and height of the green box is (120 + 20 + 5)px.

19. There's a way to overwrite it. `box-sizing: border-box;`
```css
.item-one{
  padding: 20px;
  border: solid 5px black;
  box-sizing: border-box;
}
```
It includes all the padding and border into the total width. This way, my total width is still 120px.

But let's say that I don't want box-sizing to be only affecting the green box, I want all 3 boxes to be the same way. Then add it to `*` instead.
```css
.item-one{
  /* padding: 20px;
  border: solid 5px black; */
}

.item-two{
  /* padding: 20px;
  border: solid 5px black; */
}

.item{
  padding: 20px;
  border: solid 5px black;
}

*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
```
Margin does not get affected by `box-sizing: border-box;` because margin is space outside the element.

20. Finally, go to https://flexboxfroggy.com/ and work on it!

Next week, we'll learn about media queries, which won't be on the mimo_dev dashboard, but is still useful. Consider it a bonus material.