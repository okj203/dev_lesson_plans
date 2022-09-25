## 3. HTML Demo

So, I have this million dollar app idea that I wanted to share with you all. It's a learning platform for people who want to learn programming. It's going to be the platform for the best coding bootcamp in the world, it's totally going to be a huge success, and I want to build it with you all. Let me share my screen- I'm going to name it meme_o, it's so gonna blow up.

0. Load the `index.html` of `meme_o(2)` to the browser to present what a finished page looks like, but we won't complete it today. There are some concepts (i.e. flexbox) that we're going to learn during the next lecture.

1. Quickly walk through the page at a high level.

Create an empty folder and `index.html` and `style.css`.
Change the text in the title tag based on what the finished page looks like:
```html
    <title>Meme_O</title>
```

2. Let's first create a page structure! At the moment we won't worry about the details of the content, we're just going to create a framework for all the content.
```html
<body>
    <a></a>
    <header>
    </header>
    <nav>
    </nav>

    <main>
        <section>
            <article></article>
            <article></article>
            <article></article>
        </section>
        <aside></aside>  
    </main>

    <footer>
    </footer>
</body>
```

3. Header and nav
```html
    <a class="meme_o" href="#">&#60; &nbsp; meme_o</a>
    <!-- "html encoder decoder w3docs" https://www.w3docs.com/tools/html-encoder/
    
    OR

    google "html less-than w3schools" & non-breaking space https://www.google.com/search?q=html+greater-than+&biw=1471&bih=926&ei=nJ8eY7OuFpDn5NoP6MCnsAQ&ved=0ahUKEwiz7N63oI76AhWQM1kFHWjgCUYQ4dUDCA4&uact=5&oq=html+greater-than+&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDUEljUEmCBFWgCcAF4AIABQYgBQZIBATGYAQCgAQHIAQjAAQE&sclient=gws-wiz -->
    <header>
        <img src="./assets/profile.jpeg" alt="cathy">
        <!-- The <img> alt attribute is used to specify the alternate text for an image. It is useful when the image not displayed. It is used to give alternative information for an image.  
        https://www.geeksforgeeks.org/html-img-alt-attribute/ -->

        <!-- <div class="header-content"> FOR THE FLEX LECTURE -->
            <h2 class="header-text prework">Prework 1</h2>
            <h1 class="header-text title">Prework: HTML</h1>
            <h3 class="header-text description">Here’s your personal plan for the week of Aug 21 - Sep 3, 2022</h3>
        <!-- </div> -->

        <img src="./assets/progress.jpg" alt="progress">
    </header>
    <nav>
        <a href="#">Study plan</a>
        <a class="btn" href="#">&#60; &nbsp; Prework 1 &nbsp; &#62;</a>
        <a class="jump" href="#">Jump to current sprint</a>
    </nav>
```

4. Build an article inside the section and duplicate it to make 3 of it
```html
    <section class="items">
        <article class="item">
            <p class="item-p">Learn new skills</p>
            <h3 class="item-title">HTML Basics</h3>
            <ul>
                <li><em>Discovering</em> HTML and Tags</li>
                <li><strong>Structuring</strong> Text with Tags</li>
                <li>Building Buttons</li>
                <li>Creating Links</li>
            </ul>
            <a href="#" class="btn">Continue</a>
        </article>

        <article>...</article>
        <article>...</article>
    </section>
```

5. Build the <aside> under the <section>
```html
    <aside class="aside">
        <h4 class="aside-prework">PREWORK</h4>
        <h4 class="aside-desc">What is Prework?</h4>
        <p>These exercises serve as a warm-up for your coding journey with Mimo Dev. Try to complete as much as you can before
        starting with your group, but don't worry if you miss something &#45; you don't need to finish every exercise to proceed
        further.</p>
    </aside>
```

6. Build the <footer>
```html
    <footer>
        <p>Your learning plan is handcrafted for you every week by 👩🏻‍🏫 Cathy</p> <!-- ctrl+cmd+space for emoji -->
        <div>
            <a href="https://dev.getmimo.com/dashboard?sprint=1">mimo_dev</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/company/getmimo">linkedin</a> &nbsp;|&nbsp;
            <a href="https://www.instagram.com/getmimo/?hl=en">instagram</a>
        </div>
    </footer>
```
