# Reflection Journal

## Class 01 - The 2026 Web Ecosystem

### Theory

#### 1. Browser Rendering Process

When a user visits a website, the browser first downloads the HTML document from the server. It then reads the HTML and creates something called the DOM Tree (Document Object Model), which is basically a structured representation of all the elements on the page. After that, the browser downloads and processes the CSS files to understand how each element should look. The browser then combines the DOM Tree and the CSS information to create the Render Tree. This Render Tree contains only the elements that need to be displayed on the screen. Next comes the Layout stage, where the browser calculates the size and position of every visible element. After that Once the layout is complete, the browser moves to the Paint stage, where it draws the actual pixels that appear on the screen.

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
