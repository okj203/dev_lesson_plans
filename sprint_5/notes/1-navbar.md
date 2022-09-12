---
marp: true
---

To start creating a navigation bar using Bootstrap, we first need to code a <nav> element. We then add a navbar class to the <nav> element to make it a standard navigation bar. To make the navigation bar responsive on both desktop and mobile, we add a navbar-expand-md class to the <nav> element. If we want to include a logo within the navbar, we add an img tag inside the nav element and give it the class navbar-brand.

```html
<!doctype html>
<html>
 <head>
  <link rel="stylesheet"
   href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
 </head>
 <body>
  <nav class="navbar navbar-expand-md bg-light">
   <img class="navbar-brand" src="https://mimo.app/i/insta.png"
    width="120" height="80">
  </nav>
 </body>
</html>

```
We've created a Bootstrap navbar!

Let's add some links to other pages we can navigate to.
To create a Bootstrap navbar menu, we create a normal list and add the navbar-nav class <ul> element. To add space between the navbar links, we add a nav-link class to each <a> element.

```html
<!doctype html>
<html>
 <head>
  <link rel="stylesheet"
   href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
 </head>
 <body>
  <nav class="navbar navbar-expand-md bg-light">
   <img class="navbar-brand" src="https://mimo.app/i/insta.png"
    width="120" height="80">
   <ul class="navbar-nav">
    <li>
     <a class="nav-link" href="#">Home</a>
    </li>
    <li>
     <a class="nav-link" href="#">About</a>
    </li>
   </ul>
  </nav>
 </body>
</html>
```




---
* BONUS
* [What is href="#" and why is it used?](https://stackoverflow.com/questions/4855168/what-is-href-and-why-is-it-used)
* [the <head> element is for META data and the <header> element is for actual content.](https://stackoverflow.com/questions/33919706/what-is-the-real-difference-between-the-head-and-header-tag#:~:text=%22The%20element%20represents,element%20is%20for%20actual%20content.&text=is%20not%20useful-,Show%20activity%20on%20this%20post.,links%20to%20scripts%20and%20stylesheets.)
