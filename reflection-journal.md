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
