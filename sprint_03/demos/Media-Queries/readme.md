+ Note: Media Query is NOT part of our dashboard or curriculum! So please pay extra attention during the lecture.

0. Go to bbc.co.uk and open the devtool's toggle device toolbar - cmd+up+M

We'll use only HTML and CSS (without using JS) to create a responsive header like how the BBC page adjusts to different screen sizes. Mainly we'll use flexbox and media queries.

We can do the demo on Visual Studio Code, a code editor. 

1. Start with the html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>Media Queries</title>
</head>
<body>
   <div class="text-container">
     <h1>This is my title.</h1>
   </div>
</body> 
</html>

```
and css default setting
```css
* { 
    margin:0;
    padding: 0;
    box-sizing:border-box; 
    /* this will ensure that our paddings get included as part of the total width */
} 

.text-container{ 
    background-color: pink;
}
```

2. What if I want the background color to be different for table users? What is the size of an ipad? Let's take a look at our break-points img. This is what developers use to implement media queries for devices of different sizes.

The different numbers in the img represent different widths of different devices in px. These are the widths that we'll use to create different layouts.

Let's first make the width of our browser 763px. 

Then we use the @media query.

```css
/* 
in the () we pass in the maximum width of our choice, and in the {} we add what style we want when the width is less than or equal to the max value.

All the stylings added outside the @media queries are the default setting. i.e. 
    * { 
        margin:0;
        padding: 0;
        box-sizing:border-box; 
    } 
*/
@media (max-width:768px) { 
    /* background color for tablet */
  .text-container{ 
        background-color: purple;  
    }
}

@media (max-width:480px){
    /* background color for a mobile */
    .text-container{
        background-color: blue;
    }
}
```
Now as we change the width of our screen the background color changes. Let's say that we want the text to be red. Should we add `color: red` to very media query? No, that's NOT DRY. Any default or common styling can be added to the selectors OUTSIDE the media queries.

```css
.text-container{ 
    color: red
}
```

So far, we've added all the default stylings first, and then desktop stylings, and then tablet, and then mobile device. From large to small. This kind of approach is called `DESKTOP FIRST approach`.

3. But there's another approch: `MOBILE FIRST approach`.
If I want my styling to be done primarily for mobile devices, then I can change my screen width, and add all my default stylings for the adjusted screen size, and then add media queries primarily for mobile devices.

Let's go ahead and comment out all the `DESKTOP FIRST approach`.

```css
@media(min-width:480px){
    /* background color of blue gets applied when the screen width is 480px and above */
    .text-container {
        background-color: blue;
    }
}
```

Some student would create an app for desktop and use the `MOBILE FIRST approach` and vice versa, I mean you could find ways to make it work, but it's just not a standard practice or what's considered a good practice, so please stick to `DESKTOP FIRST` for desktop app and `MOBILE FIRST` for mobile, although for the purpose of our program we'll primarily build desktop apps. 

4. Now let's comment out all the media queries for now and create some flexbox
```html
   <div class="box-container">
        <div class="box box-one"></div>
        <div class="box box-two"></div>
        <div class="box box-three"></div>
        <div class="box box-four"></div>
   </div>
```

```css
.box-container{
    display:flex;
    justify-content: center;
}
.box{
    width:120px;
    height:120px;
}
.box-one{
  background-color: pink;
}
.box-two{
    background-color: rgb(140, 54, 68);
}
.box-three{
    background-color: rgb(44, 172, 112);
}
.box-four{
    background-color:blue;
}
```

5. If you try to squeeze the browser, at which point do things start getting ugly, as in all the boxes get squeezed and chage its widths? Let's squeeze the browser to check the width-

And now let's comment in the `DESKTOP FIRST approch` media queries

```css
/* DESKTOP FIRST */
@media (max-width:768px) { 
  .text-container{ 
        background-color: purple;  
    }

}

@media (max-width: 480px) {
    .text-container { 
        background-color: blue;
    }

    .box-container {
        flex-direction: column;
        /* I don't need to add display:flex because it's already added to .box-container 
        BUT 
        justify-content:center does NOT work anymore, now that the flex direction is column. So now we need align-items:center
        */
        align-items: center;
    }
}
```

6. Now let's comment out `DESKTOP FIRST` media queries, and move onto `MEDIA TYPES`

```css
/* MEDIA TYPES */
@media speech {
    /* `speech` ensures that it only works for screen readers and speech devices for our potential users with visual impairment and styling for `speech` won't affect how it actually looks on the browser. */
  .text-container {
    background-color: blue;
  }
}

@media print { 
    /* Also does NOT affect how it looks on the browser, but when it gets printed the text will be black. Useful if you want to save ink. */
    .text-container {
    color: black;
  }
}

@media screen and (max-width:768px){
    /* `screen` is primarily used for computer screens and `all` is used for all media types. So writing 
    
    `all and (max-width:768px)` is the same as just writing `max-width:768px` */
    .text-container {
        color: black;
      }  
}
```

Let's comment out all the `MEDIA TYPES` and move on.

7. Now let's talk about `LAYOUT`or we can also call it `ORIENTATION`. You can create different rules for different layouts. Either landscape or portrait. Landscape layout is when the width of the browser is greater than the height. If I adjust the width and height of the browser, I can make the browser to be in either landscape or portrait mode depending on which is greater: height or width.

I can write css rules that only applies for either landscape or portrait mode. This way, your app appears in different layouts depending on the direction of your phone, or how it's oriented when you're holding your phone, for example.

```css
/* ORIENTATION */

@media (orientation:landscape){
    /* The styling will be applied as long as the width of the browser is greater than the height */
    .text-container{ 
        background-color: red;
    }
}

@media (orientation:portrait){
    /* styling is applied when the height is greater than width */
    .text-container{ 
        background-color: purple;
    }
}
```

8. You won't need media query all the time. It's entirly possible to create a whole project without using media query, but it is quite useful to make your UI more responsive, so feel free to take advantage of it. 