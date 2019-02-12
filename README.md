# manipulable-dom-element
1kb library for DOM manipulation in modern browsers, with a jQuery-like API.

Implements `each`, `on`, `off`, `attr`, `addClass`, `removeClass`, `toggleClass`, `val`, `text`, `html`.

### Example
```
  $('h1').text('Hello world');
  $('#input').val('I have a value!');

  // Chainable, too!
  
  $('.className')
    .addClass('hello-world')
    .on('click', function(event) {
      event.preventDefault()
    });
```

### Installation
##### Option 1. node.js
Install the module from npm for use with your desired build tool:
```
npm install manipulable-dom-element
```

##### Option 2. CDN
Add the script tag directly to your page:
```
<script src="https://unpkg.com/manipulable-dom-element@0.7.0/dist/manipulable-dom-element-browser.js"></script>
```

#### node.js: Using the `dom` export
```
import $ from 'manipulable-dom-element';

$('div').addClass('hello-world')
```

## Why?
After filling codebases with `$(things)` for years, jQuery's syntax and APIs are baked into my brain...

Web browsers have come a long way over the years. Modern browsers support a reasonably consistent set of APIs that are not difficult to work with. However, working with these native APIs can get verbose, and it may be desirable to reduce boilerplate.

If you want to simplify the way you do basic DOM manipulation without bloat, give this a try. If you've already got your own helper functions or you're leveraging some other library, that's great, but you could use more `$` in your life. If you need support for older browsers or if you rely heavily on jQuery's extensive list of methods, this probably isn't right for you.

#### TODO
- Implement `find`
