---
marp: true
theme: default
class: invert
---

# Sprint 1
## HTML & CSS Basics

--- 

## Lecture Outline

1. HTML Basics
2. Common HTML Elements & Structure
3. HTML Demo
4. CSS Basics
5. Common CSS Selectors & Properties
6. CSS Demo

---

## 1. HTML Basics

---

### What is HTML?

**HyperText Markup Language (HTML)** is used to define the meaning of content to be shared on the web. We use HTML to "markup" things like text and images so they can be displayed in a web browser. 
![structure](./assets/structure.jpeg)
[Empty / Self-Closing Tag](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)
![emptyele](./assets/emptyele.png)

---

## 2. Common HTML Elements & Structure

---

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- meta data -->
        <title>Cafe Market | Menu </title>
  </head>
  <body>
    <!-- content of the webpage -->
    <h1>Today's Menu</h1>
    <h2>Beverages</h2>
    <p>Below is our selection of coffee, tea, and other drinks.</p>
    <h3>Coffee</h3>
    <ul>
        <li>Espresso</li>
        <li>Latte</li>
        <li>Cold Brew</li>
    </ul>
    <h3>Tea</h3>
    <ul>
        <li>Green</li>
        <li>Oolong</li>
        <li>Earl Grey</li>
    </ul>
  </body>
</html>
```

---

## Tags for creating semantic page structure

`<div>` - stands for "division"; defines a division or a section in an HTML document.
`<header>` - generally used to contain logo, banner image, navigation, etc. at the top of the page.
`<nav>` - contains the navigation (i.e., links) to assist in navigating the website.
`<section>` - contains a grouping of related content elements.
`<article>` - contains discrete, self-contained content that could be redistributed. 
`<aside>` - contains content that is indirectly related to the main content within the section.
`<footer>` - generally contains information about the site, such as site owner, contact information, copyright, etc.

---

## Block Element vs Inline Elements

* Block elements take over the entire row, inline elements don't.
* [HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)

---

## 3. HTML Demo

---

## 4. CSS Basics

---

# What is CSS?

**Cascading Style Sheets (CSS)** is the language used to define how HTML elements are visually rendered on screen. That is to say, we use CSS to add style and layout to the content of our web pages.

![cssStructure](./assets/cssStructure.png)

---

## 5. Common CSS Selectors & Properties

* [Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [Properties](https://css-tricks.com/almanac/properties/)
![css-rules](./assets/css-rules.png)

---

## 6. CSS Demo

---

## Resources
* [HTML + CSS Basics](https://mimodocs.notion.site/HTML-CSS-Basics-609a1ed349e248b4b3c3c296b87c4817)
* [Mimo Glossery HTML](https://getmimo.com/glossary/html/attributes)
* [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [CSS Syntax](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS)