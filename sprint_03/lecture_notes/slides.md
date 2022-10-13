---
marp: true
theme: default
class: invert
---

# Sprint 3
## Advanced Flexbox
Media Queries & Responsive Header

--- 

## Lecture Outline

1. Media Queries Basics
2. Syntax & Anatomy
3. Media Types
4. Media Features
5. Media Queries & Responsive Header Demo

---

## 1. Media Queries Basics

* "Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones." [W3Schools - CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

![break-points](./break-points.webp)

---

## 2. Syntax & Anatomy
* The @media rule is used in media queries to apply different styles for different media types/devices.

![media-anatomy](./media-anatomy.png)

```css
@media (max-width:768px) { 
  .text-container{ 
        background-color: purple;  
    }
}

@media print { 
    .text-container {
    color: black;
  }
}
```

---

## 3. Media Types

| Value | Description |
|---|---|
| all  | Default. Used for all media type devices  |
| print  | Used for printers  |
| screen  | Used for computer screens, tablets, smart-phones etc.  |
| speech  | Used for screenreaders that "reads" the page out loud  |

---

## 4. Media Features

* max-width: The maximum width of the display area, such as a browser window
* min-width: The minimum width of the display area, such as a browser window
* [W3Schools - CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

---

## 5. Media Queries & Responsive Header Demo


---

## To-Do List
1. Sprint 4
2. Portfolio Project #2: Sweet Berries Cooking School
3. If you haven't already, schedule 1-on-1 with me to receive a ✨code review✨ on the Bean Machine project!

---

## Resources
* [W3Schools - CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Tricks - A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
* [MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [How TO - Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)

* [W3Schools - CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)
* [W3Schools - CSS Dropdowns](https://www.w3schools.com/css/css_dropdowns.asp)
* [W3Schools - CSS Dropdowns Try it Yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_text)
* [Difference between css position absolute versus relative](https://leannezhang.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6#:~:text=In%20a%20nutshell%20%E2%80%A6,changing%20the%20layout%20around%20it)


