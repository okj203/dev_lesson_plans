## 6. CSS Demo

0. First let's see if there are any styling or colors that are used across the site. There's a background color. It looks like there are other colors that appear repetitively across the page. Maybe we can save those colors to variables to make our code DRY.

A variable is a reference that stores mutable/replaceable information.

Also if we check out the font of the site, it says "Rubik" but is not one of the fonts that are supported by all browsers by default. If we google "Rubik font" we can find out that it's one of the fonts that's provided by google font api.

https://fonts.google.com/specimen/Rubik

If we look up the documentation of how to use the google font, it seems pretty simple. We can either check out the `API docs(https://developers.google.com/fonts/docs/css2)` or check out: https://www.w3schools.com/css/css_font_google.asp

```css
body {
    background-color: rgb(244 248 254);
    --color-var: lavender;
    --medium-gray: #7a88ba;
    --medium-blue: rgb(228 239 252);
    /* rgb stands for red, green, blue, and refers to a system for representing the colors to be used on a computer display. */
    --frog-green: #62d76b;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    color: rgb(62 65 109);
    margin: 50px;
}
```
Since the same color is being used for majority of the text across the site, we can also apply the color property to the body, the parent element of all. Then the text color that we apply to the body "cascades" to be applied to all of its children. By doing so, we don't need to apply the text color individually to every single element, one by one. This is why it's called Cascading Style Sheets.

1. However, something weird happens. The text color doesn't get applied to any of the anchor tags. Anchor tag is a special tag that allows us to visit other sites if we click it. When an anchor tag has an href, it doesn't inherit attributes like color from its parent. Instead, it has it's own default styling. In this case, we can manually tell our anchor tag to inherit the color from its parent and drop the default styling, such as underline.

```css
.meme_o {
    text-decoration: none;
    font-size: 20pt;
    color: inherit;
    /* By default an anchor tag does not inherit attributes like color if an href attribute is present. */
}
```

2. We can go ahead and style the header. 

There is a way to align the elements horizontally, but we're going to learn to do that in the next lecture ;) For today's demo, we won't worry about aligning, and we'll focus on basic styling.

```css
/* header */

header {
    /* Uncomment below to demo flex */
    /* display: flex;
    justify-content: space-evenly; */
    text-align: center;
    margin: 50px 0 50px 0;
    /* top - right - bottom - left */
}

img {
    width: 140px;
    height: 140px;
    border-radius: 100%;
}

.prework {
    color: var(--frog-green)
}

.description {
    color: var(--medium-gray);
}
```

3. Moving onto <nav>, let's talk about how we can access immediate children and decendents.

```css
/* nav, footer */

nav > a { /* immediate children */
    margin-left: 20px;
    text-decoration: none;
    color: var(--medium-gray);
}

nav .jump { /* decendent */
    color: #0078e6;
}

.btn {
    background-color: var(--medium-blue);
    border-radius: 15px;
    padding: 8px;
}
```

4. Since nav and footer share some properties, let's tackle them together.

Again, we'll talk about how we can align the nav and footer horizontally and vertically during the next lecture. Aligning is for the next lecture! 

```css
nav, footer {
    /* Uncomment below to demo flex */
    /* display: flex;
    align-items: center; */
    height: 50px;
}

footer {
    /* Uncomment below to demo flex */
    /* justify-content: space-evenly; */
    background-color: var(--color-var)
}

footer > div > a {
    text-decoration: none;
}
```

5. Move onto the main tag. We'll continue to style from a parent to its children, and let the styling cascade.

```css
/* main */

.content {
    /* Uncomment below to demo flex */
    /* display: flex; */
    margin-bottom: 25px;
}

.items {
    width: 70%;
    margin-left: 10px;
}

.item {
    background-color: white;
    border-radius: 15px;
    padding-bottom: 25px;
}

.item-p {
    padding: 17px 20px 0;
    margin-bottom: 5px;
    color: var(--frog-green);
}

.item li {
    padding-bottom: 10px;
}

.item > .btn {
    background-color: var(--frog-green);
    margin-left: 20px;
    padding: 8px;
    color: white;
    text-decoration: none; /* removes the underline from an anchor tag */
}

.item-title {
    border-bottom: solid 2px var(--frog-green);
    margin: 0px 20px; /* top - right - bottom - left. if only 2 values are given, style is applied vertically and horizontally. */
    padding-bottom: 10px;
}
```

6. Lastly, the aside tag.

```css
/* aside */

aside {
    width: 30%;
    height: 35%; /* if height gets assigned with 'px,' i.e. 350px, the text might overflow depending on the size of the browser and would look less responsive */
    margin: 15px;
    padding: 25px;
}

aside > .aside-prework {
    color: #0078e6;    
}
```