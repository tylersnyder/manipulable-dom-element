# manipulatable-dom-element
A utility class and convienence wrapper for DOM Manipulation. Focused on modern browsers, with a jQuery-like API.

Includes `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `text`, `html`.

### Using the `dom` export
 
```
import { dom as $ } from 'manipulatable-dom-element';

$('body').addClass('hello-world');

$('.className').on('click', function(event) {
    event.preventDefault()
});
```
