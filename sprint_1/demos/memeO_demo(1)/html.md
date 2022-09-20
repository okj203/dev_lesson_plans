## 3. HTML Demo

0. Load the `index.html` of `meme_o(2)` to the browser to present what a finished page looks like, but we won't complete it today. There are some concepts (i.e. flexbox) that we're going to learn during the next lecture.

1. Quickly walk through the page at a high level.

2. Let's first create a page structure! At the moment we won't worry about the details of the content, we're just going to create a framework for all the content.
```html
<body>
    <header>
    </header>
    <nav>
    </nav>
    <main>
        <!-- <div> -->
            <section>
                <article></article>
                <article></article>
                <article></article>
            </section>
            <aside></aside>  
        <!-- </div>   -->
        <!-- div is not needed until we use flex -->
    </main>
    <footer>
    </footer>
</body>
```

3. Header and nav
```html
    <a class="meme_o" href="#">&#60; &nbsp; meme_o</a>
    <header>
        <img src="./assets/profile.jpeg" alt="cathy">
        <div>
            <h2 class="prework">Prework 1</h2>
            <h1 class="title">Prework: HTML</h1>
            <h3 class="description">Here’s your personal plan for the week of Aug 21 - Sep 3, 2022</h3>
        </div>
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
    <aside class="item">
        <h4 class="aside-prework">PREWORK</h4>
        <h4 class="aside-desc">What is Prework?</h4>
        <p>These exercises serve as a warm-up for your coding journey with Mimo Dev. Try to complete as much as you can before
        starting with your group, but don't worry if you miss something – you don't need to finish every exercise to proceed
        further.</p>
    </aside>
```

6. Build the <footer>
```html
    <footer>
        <p>Your learning plan is handcrafted for you every week by 👩🏻‍🏫 Cathy</p> 
        <!-- ctrl+cmd+space for emoji -->
        <div>
            <a href="https://dev.getmimo.com/dashboard?sprint=1">mimo_dev</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/company/getmimo">linkedin</a> &nbsp;|&nbsp;
            <a href="https://www.instagram.com/getmimo/?hl=en">instagram</a>
        </div>
    </footer>
```
