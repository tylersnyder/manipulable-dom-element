# manipulable-dom-element
A utility class and convienence wrapper for DOM manipulation. Focused on modern browsers, with an API similar to jQuery, and a footprint  under 1KB.

Includes `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `val`, `text`, `html`.

#### TODO
- Implement .find()

### Why?
Web browsers have come a long way since jQuery's inception. Modern browsers support a reasonably consistent set of APIs that are not difficult to work with. However, working with these native APIs can sometimes lead to verbose code, and it may be desirable to simplify the way you interact with these APIs.

Many web developers have experience with jQuery, whether good or bad. After filling codebases with`$(things)` for years, jQuery's syntax and APIs are baked into my brain.

If you want to simplify the way you do basic DOM manipulation without bloat, give this a try. If you need support for older browsers or if you rely heavily on jQuery's extensive list of methods, this probably isn't right for you.

### Installation
Option 1. Install the module from npm for use with your desired build tool:
```
npm install manipulable-dom-element
```

Option 2. Drop the script tag in your page:
```
<script src="https://unpkg.com/manipulable-dom-element@0.6.0/dist/manipulable-dom-element-browser.js"></script>
```

### Using the `dom` export
 
```
import { dom as $ } from 'manipulable-dom-element';

$('.className')
  .addClass('hello-world')
  .on('click', function(event) {
    event.preventDefault()
  });
```
