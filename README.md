# manipulable-dom-element
A utility class and convienence wrapper for DOM manipulation. Focused on modern browsers, with a jQuery-like API.

Includes `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `text`, `html`.

### Installation
`npm install manipulable-dom-element`

### Using the `dom` export
 
```
import { dom as $ } from 'manipulable-dom-element';

$('.className')
  .addClass('hello-world')
  .on('click', function(event) {
    event.preventDefault()
  });
```
