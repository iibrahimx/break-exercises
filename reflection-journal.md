# Reflection Journal

## Class 01 - The 2026 Web Ecosystem

### Theory

#### 1. Browser Rendering Process

As depicted in the image below, when a user visits a website, the browser first downloads the HTML document from the server. It then reads the HTML and creates something called the DOM Tree (Document Object Model), which is basically a structured representation of all the elements on the page. After that, the browser downloads and processes the CSS files to understand how each element should look. The browser then combines the DOM Tree and the CSS information to create the Render Tree. This Render Tree contains only the elements that need to be displayed on the screen. Next comes the Layout stage, where the browser calculates the size and position of every visible element. After that Once the layout is complete, the browser moves to the Paint stage, where it draws the actual pixels that appear on the screen.
![How the browser works](./images/how-browser-works.jpeg)

Understanding this process is important because it helps developers build faster and more efficient websites. And to also improve the overall user experience. It also helps when debugging layout and performance issues.

#### 2. HTTP/3 and QUIC

With older protocols, if one packet of data was delayed or lost, other packets often had to wait before they could be processed. This could slow down websites, especially on unstable networks. QUIC reduces this problem by allowing multiple streams of data to move independently. If one stream experiences an issue, the others can continue without being blocked. It also combines security and connection setup into a faster process, helping websites load more quickly.

For users in 2026, this means better performance, pages load faster, videos buffer less often, and online applications feel more responsive.

#### 3. Semantic HTML Observation

Suprisignly a website I stumbled upon that does not use sematic HTML was netflix, when I inspected their landing page. While browsing it, of course all the contents looked visually correct and appealing, but inspection told a different story. As everything I saw was just a bunch of divs and a lot of it at that. The underlying clue I could present was the basic fact that I inspected the page, another clue was that some sections appeared important visually but did not seem properly organised when inspected using browser developer tools. This could make it difficult for screen readers and search engines to understand the content. Semantic HTML helps provide meaning to content. Using elements such as header, nav, main, section, and footer makes a website easier to understand for both users and machines. When these elements are missing, accessibility and SEO can suffer even if the website looks fine on the screen.

### Product Thinking

#### 1. Semantic HTML and SEO

If I were building a blog for a famous chef who wants more traffic, I would make sure semantic HTML is used properly throughout the website. Search engines rely on structure to understand content, and semantic tags provide useful context.

The main content of each recipe or article would be placed inside an article element. The page title and important information would be placed inside a header element. The primary content area would be wrapped in a main element, while related content such as popular recipes or cooking tips could be placed inside an aside element.

This structure helps search engines understand what content is most important on the page. As a result, recipes and blog posts have a better chance of appearing in search results. It also improves accessibility for users who rely on assistive technologies, creating a better overall experience.

#### 2. Edge Computing for Multiplayer Games

If I were designing a real-time multiplayer game, one of the biggest benefits of edge computing would be lower latency. Players expect their actions to appear instantly on the screen, especially in competitive games.

By processing information closer to where players are located, edge computing can reduce the time it takes for data to travel between players and servers. This leads to faster responses and smoother gameplay.

Another benefit would be improved reliability. If servers are distributed across multiple locations, players can connect to the nearest one instead of relying on a single distant server. This can help reduce lag and provide a better gaming experience for users around the world.

### Engineering Best Practice

#### 1. Using divs Everywhere

I do not completely agree with using divs for everything. While a div can be used to create almost any layout, relying on divs alone removes a lot of useful meaning from the page structure.

Accessibility is one reason why semantic elements are important. Screen readers use semantic tags to understand different sections of a page. A main element clearly identifies the primary content area, while a nav element identifies navigation links. When everything is a div, assistive technologies lose that extra information.

Semantic HTML also helps with SEO because search engines can better understand the content and structure of a page. From a maintenance perspective, semantic elements make code easier to read. If another developer joins the project, they can quickly understand the purpose of each section without reading many comments.

For collaboration and long-term projects, semantic HTML creates cleaner and more organised code. Divs still have their place, but they should be used when no suitable semantic element exists rather than for every part of a website.

---

## Class 02 - Typography & Information Hierarchy

### Theory

#### 1. Difference Between em and i

The <em> and <i> tags may look similar because browsers often display both in italics, but they have different meanings. The em tag is used when a word or phrase needs emphasis. It tells both users and assistive technologies that the content is important and should be stressed. The i tag on the other hand is mainly used for text that is different from the surrounding content without adding importance.

For example, if I write "I need to finish this assignment today," I could use em on the word "need" to show emphasis. If I am mentioning a foreign word like "ekaro," I could use the i tag because it is a word from another language.

Understanding the difference helps create more meaningful and accessible content.

#### 2. HTML Elements With Special Screen Reader Behaviour

- Button element: Screen readers immediately recognize it as a button that can be clicked or activated.

- Heading elements such as h1, h2, and h3: Screen readers use headings to help users move around a page and understand the content structure.

- Input element used in forms: Screen readers identify it as a field where users can enter information.

Browsers treat these elements specially because they provide important information about the purpose of the content. This helps users who rely on assistive technologies navigate websites more easily.

#### 3. ARIA Labels vs Semantic HTML

ARIA labels are useful when an element needs a description that is not visible on the screen. For example, if a navigation menu only shows a hamburger icon, I can use an aria-label like "Open navigation menu" so screen reader users know its purpose.

However, ARIA should not be used to replace proper HTML structure. If a div is used as a button, adding an aria-label does not make it as good as using a real button element. In that situation, the better solution is to fix the HTML and use the correct semantic element.

### Accessibility Reflection

#### 1. Accessibility Audit

I tested the my color space homepage using keyboard navigation. I was able to move around the page using the Tab key and clearly see which element was currently selected.

The buttons on the page were also accessible through keyboard navigation and when I pressed enter on them they were successfully clicked and the the saem thing had it been clicked with a mouse. The page structure felt really simple and organized.

A major thing observed also was that the website places a strong focus on keyboard accessibility. Users can navigate important parts of the page without needing a mouse that much. Overall, the accessibility experience was good and showed how proper HTML and accessibility practices can improve usability.

### Product Thinking

#### 1. API Documentation Hierarchy

If I were designing documentation for an API

- The h1 heading would contain the name of the API and a short overview.
- The h2 headings will be used for different sections such as Authentication, Endpoints, Error Handling etc.
- h3 headings could be used under each section for specific topics. For example, under Endpoints there could be headings such as Get Users, Create User, Update User, and Delete User.

---

## Class 03 - Modern Assets & Linking

### Theory

#### 1. Optimizing a 5 MB PNG Hero Image

If a designer gives me a 5 MB PNG image for a hero section, the first thing I would do is check if PNG is really necessary. If the image is a normal photograph

- I would convert it to a modern format like WebP or AVIF because these formats usually provide much smaller file sizes while keeping good quality.
- Next, I would resize the image to the maximum size needed on the website. There is no reason to upload a huge image if users will only see it in a smaller space.
- After resizing, I would compress the image using tools such as TinyPNG.

#### 2. Understanding srcset

The srcset attribute allows the browser to choose the most appropriate image size for a user's device. Instead of sending the same image to everyone, the browser can pick a smaller image for mobile users and a larger image for desktop users.

For example, imagine an online store with product images. If a mobile user only needs a small image, downloading a large desktop image would waste data and slow down the page. With srcset, the browser can automatically choose a smaller version. This improves loading speed, saves bandwidth, and creates a better experience for users on slower internet connections or mobile devices.

#### 3. Why rel="noopener" Matters

When using target="\_blank", a new browser tab is opened. Without rel="noopener", the newly opened page can sometimes access information about the page that opened it.

In simple terms, imagine giving a stranger access to the controls of your car while you are still driving it. That is not something you would want to happen.

Adding rel="noopener" prevents the new page from being able to control or interact with the original page. This improves security and helps protect users from certain types of attacks.

### Engineering Thinking

#### 1. Strategy for Displaying 50 Product Images

If I need to display 50 product images on a page, I would focus on performance and user experience.

- I would use modern image formats like WebP to reduce file sizes. Next, I would use lazy loading so images only load when users scroll close to them. This prevents the browser from downloading all 50 images immediately.

I would also use responsive image sizes so mobile users do not download large desktop images. Using a CDN would help deliver images from servers closer to users, improving loading speed.

Finally, I would compress all images before uploading them. Combining these techniques would help the page load faster and feel more responsive for users.

#### 3. Why rel="noopener" Matters

When using target="\_blank", a new browser tab is opened. Without rel="noopener", the newly opened page can sometimes access information about the page that opened it.

In simple terms, it's almost like giving a stranger access to the controls of your car while you are still driving it. Adding rel="noopener" prevents the new page from being able to control or interact with the original page. This helps protect users from certain types of attacks.

### Engineering Thinking

#### 1. Strategy for Displaying 50 Product Images

If I need to display 50 product images on a page, I would focus on performance and user experience.

- I would use modern image formats like WebP to reduce file sizes.
- I would use lazy loading so images only load when users scroll close to them. This prevents the browser from downloading all 50 images immediately.
- I would also use responsive image sizes so mobile users do not download large desktop images.

---

## Class 05 - The CSS Engine: Box Model & Specificity

### Theory

#### 1. CSS Box Model

![How the browser works](./images/border-box.jpeg)

If one div has a margin-bottom of 20px and another div has a margin-top of 30px, the space between them will be 30px, not 50px. This happens because vertical margins collapse and the larger margin wins.

#### 2. CSS Specificity

Specificity is how the browser decides which CSS rule to apply when multiple rules target the same element.

For the given selectors:

```css
.header nav ul li a
nav a.active
.nav-links a
```

Using the 4-column calculator:

- Inline Styles = (1,0,0,0): Applied directly to the HTML element via the style attribute.
- IDs = (0,1,0,0): (e.g., `#header`).
- Classes, Attributes, and Pseudo-classes = (0,0,1,0): (e.g., `.nav`, `[type="text"]`, `:hover`, or `:active`).
- Elements and Pseudo-elements = (0,0,0,1): (e.g., `div`, `nav`, `a`, `::before`)

**Calculations**

For `.header nav ul li a`
Classes: 1 (.header)
Elements: 4 (nav, ul, li, a) 1 each
Score: (0, 0, 1, 4)

For `nav a.active`
Classes/Pseudo-classes: 1 (.active)
Elements: 2 (nav, a)
Score: (0, 0, 1, 2)

For `.nav-links a`
Classes: 1 (.nav-links)
Elements: 1 (a)
Score: (0, 0, 1, 1)

`.header nav ul li a` because of the tie of all selectors for the first 3 columns, the fourth columns will be like a tie breaker and `.header nav ul li a` has 4 elements, which beats out the 2 elements of the second selector and the 1 element of the third.

#### 3. What is the CSS Cascade?

The cascade is the process the browser uses to decide which CSS rule should be applied.

For example, if I have two rules styling the same button, the browser checks things like specificity and the order of the rules.

Understanding the cascade helps me avoid writing extra CSS when a simple change would solve the problem.

### Engineering Thinking

#### 1. Padding Makes an Element Wider

This usually happens because the default box model adds padding to the element's width. For example, if an element has a width of 200px and I add 10px padding on both sides, the total width becomes larger than 200px.

A common fix is using: `box-sizing: border-box`. This makes the padding stay inside the specified width.

#### 2. Content-Box vs Border-Box

Content-box is the default box model where padding and borders increase the final size of an element.

Border-box includes the padding and border inside the width and height that you set.

I prefer border-box because it makes layouts easier to manage and more predictable.

---

## Class 06 - Flexbox Mastery

### Theory

#### 1. Difference Between flex-grow, flex-shrink, and flex-basis

I think of Flexbox like sharing space in a room. For example, if three people are sharing a room, flex-basis is the space they start with, flex-grow is how much extra space they can get, and flex-shrink is how much space they can give up when the room becomes crowded.

- `flex-grow` decides how much extra space an item can take when there is free space available.
- `flex-shrink` decides how much an item can reduce in size when there is not enough space.
- `flex-basis` is the starting size before grow or shrink happens.

#### 2. When align-items: stretch Does Not Work

`align-items: stretch` only works when the item does not already have a fixed height. In this example below, the item already has a height of 100px, so it will not stretch to fill the container. The fixed height prevents the stretching behavior.

Example:

```css
.container {
  display: flex;
  align-items: stretch;
}

.item {
  height: 100px;
}
```

### Engineering Thinking

#### 1. Navigation Bar Layout

Referencing the screenshot below, my thinking was to divide the navbar into three sections. The logo stays on the left, the links stay in the middle, and the sign-in button stays on the right. Using flex values helps keep the links centered even if the logo or button changes width.

**HTML Structure**

![How the browser works](./images/class6-nav-layout.png)

**Flexbox Solution**

![How the browser works](./images/class6-flexbox-solution.png)

#### 2. Instagram Header Using Flexbox

To build the Instagram header, I would place all navigation items inside a Flexbox container.

On large screens, all menu items would be displayed in a row. On smaller screens, I would hide the menu items and show a hamburger menu instead.

Flexbox would help keep the spacing consistent and make the layout easier to manage across different screen sizes. I would also test the layout on mobile, tablet, and desktop screens to make sure everything remains usable and easy to navigate.

---

## Class 07 - CSS Grid & Layout Complexity

### Theory

#### 1. When to Choose CSS Grid Over Flexbox

I would choose CSS Grid when working with layouts that have both rows and columns. Flexbox works best in one direction at a time, while Grid is better for full page layouts.

Some examples are:

1. A dashboard with KPI cards.
2. A product dashboard featuring customers' testimonials in cards.
3. A photo gallery where items need to be arranged in rows and columns.

#### 2. grid-template-areas vs grid-template-columns

I would use `grid-template-columns` when I only need to define column sizes.

Example:

```css
grid-template-columns: 1fr 2fr 1fr;
```

I would use `grid-template-areas` when I want to visually describe the layout. I think grid-template-areas makes complex layouts easier to understand because the layout can be seen directly in the code as shown in the example code below.

Example:

```css
grid-template-areas:
  "card1 card1 card2"
  "card3 card4 card6"
  "card3 card5 card6";
```

card1 spans 2 columns 1 row
card2, card4, and card5 span 1 row 1 column
card3 and card6 span 2 rows 1 column

### Engineering Thinking

#### 1. Magazine Layout

**ASCII Sketch**

```text
+------------------------------------------------------+
|                   HERO ARTICLE                       |
+------------------------------------------------------+

+---------------------------+--------------------------+
|          WIDE ARTICLE 2   | WIDE ARTICLE 3           |
+---------------------------+--------------------------+
+------------------------------------------------------+
|                   WIDE ARTICLE                       |
+------------------------------------------------------+

+-----------------+-----------------+------------------+
| SMALL ARTICLE 1 | SMALL ARTICLE 2 | SMALL ARTICLE 3  |
+-----------------+-----------------+------------------+
```

**Grid Layout**

```css
.container {
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(3, 1fr);

  grid-template-areas:
    "hero hero hero"
    "a2    a2   a3"
    "wide wide wide"
    "s1    s2   s3";
}

.hero {
  grid-area: hero;
}

.article-2 {
  grid-area: a2;
}

.article-3 {
  grid-area: a3;
}

.wide {
  grid-area: wide;
}

.small-1 {
  grid-area: s1;
}

.small-2 {
  grid-area: s2;
}

.small-3 {
  grid-area: s3;
}
```

I used `fr` units because they divide available space evenly and make the layout responsive.

#### 2. Responsive Dashboard Layout

---

## Class 08 - Tailwind CSS Fundamentals

### Theory

#### 1. Utility-First Philosophy

According to my understanding, instead of creating custom CSS classes for every component, Tailwind allows us to use small utility classes directly in the HTML making styling faster and more convinient.

For example, instead of creating a class called `.button` and then proceeding to styling it by doing

```css
.button = {
  `background-color: #000000`;
  color: #ffffff;
  padding: 12px 24px;
}
```

One can simply use these tailwind utility classes to achieve the same results, inline and faster `bg-black` (or `bg-[#000000]`), `text-white` (or `bg-[#FFFFFF]`), and `p-4` respectively. I believe this approach helps developers build interfaces faster and keeps styling consistent across a project.

#### 2. What is the JIT Compiler?

JIT means Just-In-Time compiler.

It generates only the CSS classes that are actually used in the project. This helps keep the final CSS file smaller. Without JIT, many unused styles might be included. With JIT, only the classes being used are generated and in turn reduces file size.
