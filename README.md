# manipulable-dom-element
A utility class and convienence wrapper for DOM manipulation. Focused on modern browsers, with an API similar to jQuery, and a footprint well under 1KB with gzip and minification.

Includes `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `text`, `html`.

### Why?
jQuery's syntax is baked into my brain, but I hate loading such a large library. If you need support for older browsers or rely heavily on jQuery's extensive list of methods, this probably isn't right for you. If you need to do some basic DOM manipulation in modern browsers, give it a try.

### Installation
Option 1. Install the module from npm for use with your desired build tool:
```
npm install manipulable-dom-element
```

Option 2. Drop the script tag in your page:
```
<script src="https://unpkg.com/manipulable-dom-element@0.5.5/dist/manipulable-dom-element-browser.js"></script>
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
