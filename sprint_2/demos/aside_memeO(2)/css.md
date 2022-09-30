<!-- Let's start from where we have left off and finish the last few things before we go onto the new topic -->

6. aside

```css
/* aside */

.aside {
    background-color: white;
    border-radius: 15px;
    margin: 0 25px;
    padding: 50px 20px;
}

aside > .aside-prework {
    color: #0078e6;    
}
```

7. footer

```css
    footer {
        height: 50px;
        background-color: var(--color-var)
    }

    footer > div > a {
        text-decoration: none;
    }
```

# CSS Flex Demo

1. header
2. nav 
3. aside
4. footer

---

1. header
```css
    header {
        /* Uncomment below to demo flex */
        display: flex;
        justify-content: space-evenly;
    }

```

2. nav 
```css
    nav {
        /* Uncomment below to demo flex */
        display: flex;
        align-items: center;
    }
```

3. aside
```css
    /* Uncomment below to demo flex */
    .content {
        display: flex;
    }

    .items {
        width: 70%;
        margin-left: 10px;
    }

    .aside {
        /* 
        without the `width: 30%`, it'll be set to `width: auto` and takes up more than 30% 
        
        Auto is the default value for dimension properties width and height.

        Setting margin:0 auto and a width or max-width allows a block of content to be horizontally centered on the page.
        https://unmatchedstyle.com/news/a-to-z-css-auto.php#:~:text=Auto%20is%20a%20CSS%20value,%2Dsize%3A%20auto%20auto%3B%20%7D
        */
        width: 30%;
        height: 40%;
        /* if height gets assigned with 'px,' i.e. 350px, the text might overflow depending on the size of the browser and would look less responsive */
    }
```

4. footer 
```css
    footer {
        /* Uncomment below to demo flex */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
```