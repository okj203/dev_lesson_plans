---
marp: true
theme: default
class: invert
---

# Sprint 2
## Flexbox Baiscs

--- 

## Lecture Outline

1. Display Property
2. Common Values for Display Property 
3. Display Mini Demo - Inline, Block, None
4. Flexbox Basics
5. Common Flexbox Properties
6. Flexbox Demo

---

## 1. Display Property

* "Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves."
[CSS Tricks - Display](https://css-tricks.com/almanac/properties/d/display/)

---

## 2. Common Values for Display Property

* `inline` - Displays an element as an inline element (like <span>). Any height and width properties will have no effect
* `block` - Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
* `none` - The element is completely removed
* `flex` - Displays an element as a block-level flex container
* `grid` - Displays an element as a block-level grid container

---

## 3. Display Mini Demo - Inline, Block, None 

`../demos/display-mini-demo`

---

## 4. Flexbox Basics

* `flex` is one of the most commonly used values for the display property
* Flexbox allows us to distribute HTML elements evenly and dynamically
* "The Flexbox Layout aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word 'flex')."
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-prefixing-flexbox)

---

## 5. Common Flexbox Properties

```css
.container {
    display: flex; 
    /* defines a flex container */
    flex-direction: row(default) | column; 
    /* defines the direction flex items are placed in the flex container */
    justify-content: flex-start(default) | space-evenly;
    /* horizontally distributes items; 
    space-evenly - items are distributed so that the spacing between any two items (and the space to the edges) is equal. */
    align-items: stretch(default) | center;
    /* vertically aligns/distributes items; 
    center - items are centered in the cross-axis baseline: items are aligned such as their baselines align */
}

```
* For more: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-prefixing-flexbox)

---

## 6. Flexbox Demo

---

## To-Do List
1. Sprint 3
2. Make sure to join Replit team, if you don't have access to it make sure to slack me your email and/or Replit username.
3. The Bean Machine on Replit
4. [FLEXBOX FROGGY](https://flexboxfroggy.com/)

---

**BONUS CHALLENGE: Upgrade our Meme_O project by using flex properties!**
 - Level 1: Apply styling to <aside> and <footer> to review the concepts from Sprint 1!
 - Level 2: Apply flex properties to align everything correctly to practice the concepts from Sprint 2! 
 - Level 3: Apply `box-sizing: border-box;` in `*` and update all the paddings! 

 ✨🥳✨ Bonus challenge is entirely optional. If you'd like, feel free to replace my photo in the project with yours (needs to be same width & height), and replace the link to the LinkedIn page with yours as well! Be as creative as you'd like! ✨🥳✨   

---

## Resources
* [W3Schools - CSS display Property](https://www.w3schools.com/cssref/pr_class_display.asp)
* [CSS Tricks - Display](https://css-tricks.com/almanac/properties/d/display/)
* [MDN - Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-prefixing-flexbox)
* [FLEXBOX FROGGY](https://flexboxfroggy.com/)
