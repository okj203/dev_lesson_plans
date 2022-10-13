+ Note: Here we learn to make our header interactive without using JavaScript. We can use both media query and some css to accomplish this. 

0. Now let's create a responsive header. So we have this boiler setup, which is just some HTML meta tag and CSS reset.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>Responsive Header</title>
</head>
<body> 
</body>
</html>
```
```css
* { 
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

1. Let's create a quick header.
```html
   <header>
    <p>Mimo</p>
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">Team</a>
            <a href="#">About</a>
        </div>
   </header>
```
```css
header{
    background-color: brown;
    color:white;
}
```
2. Now how can we place the Mimo (p tag) and all the anchor tags in one row, but apart from each other?
<!-- display: flex! -->

```css
header{
    background-color: brown;
    color:white;
    display: flex;
    justify-content: space-between;
    padding:0 20px;
    height:70px;
    /* but we also want to place them vertically in the center */
    align-items: center;
}

/* We can also style the anchor tags */

a{
  color:white; /* or color:inherit */
  text-decoration: none;  
}
```

3. Now it looks nice! But when it's smaller than 768px, which is a size of a tablet, I want the texts of all the anchor tags to disappear. Instead I want a simple hamburger icon to show up. Let's first, make them disappear when the width becomes less than 768px.

```css
@media (max-width:768px){
    .menu {
        display:none;
    }
}
```

4. Boom! Now it's gone when the width is 768px and below. But I want something else to show up when it's gone. The hamburger icon!

```html
   <header>
    <p>Mimo</p>
        <p class="burger">&#9776;</p>
        <!-- 
            Google: unicode w3schools
            https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp 
        -->
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">Team</a>
            <a href="#">About</a>
        </div>
   </header>
```

But I also want them to be wrapped in one element, since they'll replace each other back and forth depending on the width of the browser.

```html
   <header>
        <p>Mimo</p>
        <div class="menu-container">
            <p class="burger">&#9776;</p>
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">Team</a>
                <a href="#">About</a>
            </div>
        </div>
   </header>
```

5. In the menu-container, I want them to be side-by-side.
What should I do?
<!-- flex! -->
```css
.menu-container{
    display: flex;
}
```

6. Now I want the hamburuger icon to show only in the smaller screen; I don't want it to show when it's big.

```css
.burger{
    display:none;
}
```

7. How do I bring it back when the screen is smaller?
```css
@media (max-width:768px){
    .menu {
        display:none;
    }
    .burger{
        display:block;
    }
}
```
Boom! Now we see the texts when the screen is big and we only see the hamburger icon when the screen is small.

8. Now I want the anchor tags to show up when I click the icon, but I want them to show up below the header, like a dropdown menu, not within the header. If I click it again, I want the dropdown menu to disappear. I basically want to be able to toggle the menu to appear and disappear back and forth.

We can do that by using an input tag and a label tag. Again, this is not the only way, but input and label is how we do it today.

First, we change the p tag for the burger icon into a label tag.
```html
   <header>
        <p>Mimo</p>
        <div class="menu-container">
            <!-- <p class="burger">&#9776;</p> -->
            <label class="burger">&#9776;</label>
            <input type="checkbox" />
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">Team</a>
                <a href="#">About</a>
            </div>
        </div>
   </header>
```

Something we must know is that label and input work together. When I click this input checkbox, I want the checkbox to be selected and be connected to the icon, because this label is the label of this input. The input is the checkbox, and label is the icon, and I need them to be connected. 

And the way label and input get connected is through:

label-for attribute
input-id attribute

The for attribute of the label and the id attribute of the input should match and connect them to work together.

```html
   <header>
        <p>Mimo</p>
        <div class="menu-container">
            <!-- <p class="burger">&#9776;</p> -->
            <label for="burger" class="burger">&#9776;</label>
            <input id="burger" type="checkbox"/>
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">Team</a>
                <a href="#">About</a>
            </div>
        </div>
   </header>
```

Now if I do interact with the label, it will be reflected on the input. And that is because the label-for and input-id are connected.

Since we used the input type checkbox, we can make it do something when it's checked and do something else when it's unchecked.

We don't want to make the checkbox to be visible, but we'll do that later.

All there's left to do, is to apply some styling for when it's checked and when it's not checked.

```css
@media (max-width:768px){
    .menu {
        display:none;
    }
    .burger{
        display:block;
    }
   
/* 
So now I select my input checkbox with its id (#), and to refer to the status of the the checkbox, we use this property called pseudo class. 

It allows us to specifically refer to the status of an element so we can do something when it's active and do something else when it's not active.

And what I want to do is when it's checked, I want to bring all the menu back. 
*/

    #burger:checked + .menu {
        /* 
        We select the class of menu and use the + sign, so when the input is checked, we do something with the menu. And this plus sign works only when the elements are siblings and right next to each other. There shouldn't be anything in between. This is called ajacent sibling combinator.

        https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator
        https://www.w3schools.com/css/css_combinators.asp

        Basically what it means is, when the burger input element is in a certain state (such as "checked"), I want the menu element to have certain styling.
        */


        /* 
        Let's add 

        display:block

        And if we click the icon, the menu appears. Right now, I'm technically clicking the label, not the input checkbox, but because they are connected through label-for and input-id, clicking the label changes the status of the input checkbox.

        If we add:

        <label for="test" class="test">&#9776;</label>
        <input id="test" type="checkbox" />

        in the bottom of our html and try clicking the label instead of the input box itself, we can see how they are connected.

        So now we can add styling to the dropdown menu for when the label is clicked.
        */

        background-color: purple;
        display:flex;
        flex-direction:column;
        align-items: center;

        /* Now every time I click the label, the menu bar shows up, but because it's fixated on the current position, even if we change the width to 100%, it only takes up how much ever space it has within its limited spot.
        
        I want to take the element out of it's normal flow and make the position of the element, in relation to its nearest ancester.

        https://developer.mozilla.org/en-US/docs/Web/CSS/position
        */

        position:absolute;

        /* 
        Now if we make the memu bar show up and hover over where its ancestor (menu-container) is supposed to be, the menu is right over where the ancestor is supposed to be, unrelated to whatever else is happening around it. 

        Basically by using this `position:absolute`, we're making it unaffected by its surroundings, and positioning it ABSOLUTE, IN RELATION to its nearest ancestor. 

        Now that we took it out of its normal flow, or now that its not limited by its original position, now we can make it bigger, and basically make it show up in the correct place.
        */
        width:100%;
        left:0;
        top:70px;
    }
}
```

Finally, we just need to hide the checkbox and we're done.

```css
/* and also hide the input */
#burger{
    display:none;
}
```

I must say that I didn't make the dropdown menu in the easiest way today. There's a more intuitive way, but I used this demo that uses media query, for 2 major reasons: because (1) you probably don't need a whole lecture to learn the simple version and (2) media query can be very useful to build a responsive application. So I decided that it makes sense to demo the harder version during the live lecture, that way you actually have an opportunity to see how media query gets used in real life, and you get to ask questions in person. Then you can learn the simpler version in your own time.

One of the more simple ways to make a dropdown menu only involves position relative and absolute. It doesn't involve media query, so it's slightly less responsive, but it's still pretty good. In case you are interested, I will share the links so you can explore the less complex method as well.  

https://www.w3schools.com/css/css_dropdowns.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_text


-----
CSS TRICKS - media query
https://css-tricks.com/responsive-images-css/

CSS Media Queries - Examples
https://www.w3schools.com/css/css3_mediaqueries_ex.asp

How TO - Typical Device Breakpoints
https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp

Difference between css position absolute versus relative
https://leannezhang.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6#:~:text=In%20a%20nutshell%20%E2%80%A6,changing%20the%20layout%20around%20it.