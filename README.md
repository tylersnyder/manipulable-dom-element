# manipulable-dom-element
A utility class and convienence wrapper for DOM manipulation. Focused on modern browsers, with a jQuery-like API.

Includes `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `text`, `html`.

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
