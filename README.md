ScrollToFixed
==========================

This plugin is used to fix elements on the page (top, bottom, anywhere); however, it still allows the element to continue to move left or right with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward once the vertical scroll has reached the target position; but, the element will still move horizontally as the page is scrolled left or right. Once the page has been scrolled back down past the target position, the element will be restored to its original position on the page.

This plugin has been tested in Firefox 3+, Google Chrome 10+ Safari 5+, Internet Explorer 8/9, and Opera 11.60+.

## Usage ##

Default options:

```javascript
$(document).ready(function() {
  $('#mydiv').scrollToFixed();
});
```

Margin and Limit options:

```javascript
$(document).ready(function() {
  $('#cart').scrollToFixed({ marginTop: 10, limit: $($('h2')[5]).offset().top });
});
```

Fixed Header and Fixed Footer with a Limit

```javascript
// The fixed footer will go unfixed to reveal whatever is below it when scrolled
// past the limit.
$(document).ready(function() {
  $('.header').scrollToFixed();
  $('.footer').scrollToFixed( { bottom: 0, limit: $('.footer').offset().top } );
});
```

Very Full Example

```javascript
$(document).ready(function() {
    $('.header').scrollToFixed({
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });
    $('#summary').scrollToFixed({
        marginTop: $('.header').outerHeight() + 10,
        limit: $('.footer').offset().top - $('#summary').outerHeight() - 10,
        zIndex: 999,
        preFixed: function() { $(this).find('.title').css('color', 'blue'); },
        preAbsolute: function() { $(this).find('.title').css('color', 'red'); },
        postFixed: function() { $(this).find('.title').css('color', ''); },
        postAbsolute: function() { $(this).find('.title').css('color', ''); }
    });
    $('.footer').scrollToFixed( {
        bottom: 0,
        limit: $('.footer').offset().top,
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });
});
```

Triggers

```javascript
  $('.header').trigger('remove'); // removes scrollToFixed from the element 
```

```javascript
  $('.header').trigger('resize'); // resizes the spacer in case the fixed element height changes.
```

## Demos ##

* http://jsfiddle.net/y3qV5/434/ - floating cart summary with a limit.
* http://jsfiddle.net/k2R3G/81/  - fixed header; allows content to flow under it.
* http://jsfiddle.net/ZczEt/167/ - very full example: fixed header, footer and floating summary, with events.
* http://jsfiddle.net/y3qV5/435/ - 2 cart summaries that scroll up and stop at different intervals.
* http://jsfiddle.net/y3qV5/769/ - Another multi-cart example using floats, with section stops.

## Options ##

* marginTop - the number of pixels between the top of the window and the fixed element.
* limit - the vertical scroll position at which the element will begin to scroll up the page (absolutely).
* bottom - the number of pixels between the bottom of the window and the bottom of the fixed element.
* zIndex - the z-index of the fixed element.
* spacerClass - the class to add to the spacer for styling purposes.
* preFixed - a function handler triggered just before the element goes fixed.
* fixed - a function handler triggered just after the element goes fixed.
* postFixed - a function handler triggered just after the element leaves fixed.
* preUnfixed - a function handler triggered just before the element goes unfixed.
* unfixed - a function handler triggered just after the element goes unfixed.
* postUnfixed - a function handler triggered just after the element leaves unfixed.
* preAbsolute - a function handler triggered just before the element goes absolute.
* postAbsolute - a function handler triggered just after the element leaves absolute.

## Contributors ##

* [bigspotteddog](https://github.com/bigspotteddog)
* [megamattron](https://github.com/megamattron)
* [techpeace](https://github.com/techpeace)