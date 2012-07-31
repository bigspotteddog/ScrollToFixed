ScrollToFixed
==========================

This plugin is used to fix elements on the page (top, bottom, anywhere); however, it still allows the element to continue to move left or right with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward once the vertical scroll has reached the target position; but, the element will still move horizontally as the page is scrolled left or right. Once the page has been scrolled back down past the target position, the element will be restored to its original position on the page.

This plugin has been tested in Firefox 3+, Google Chrome 10+ Safari 5+, Internet Explorer 8/9, and Opera 11.60+.

**IMPORTANT**: The latest version of this plugin reverts the offset adustment code that added the difference between the left offset and position to the left offset.  For anyone that needed it, that code is now turned on by using the **offsets: true** option.
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

    $('.footer').scrollToFixed( {
        bottom: 0,
        limit: $('.footer').offset().top,
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });

    // Order matters because our summary limit is based on the position
    // of the footer.  On window refresh, the summary needs to recalculate
    // after the footer.
    $('#summary').scrollToFixed({
        marginTop: $('.header').outerHeight() + 10,
        limit: function() {
            var limit = $('.footer').offset().top - $('#summary').outerHeight(true) - 10;
            return limit;
        },
        zIndex: 999,
        preFixed: function() { $(this).find('.title').css('color', 'blue'); },
        preAbsolute: function() { $(this).find('.title').css('color', 'red'); },
        postFixed: function() { $(this).find('.title').css('color', ''); },
        postAbsolute: function() { $(this).find('.title').css('color', ''); }
    });
});
```

```javascript
// returns whether or not the ScrollToFixed plugin has been applied to the element.
var b = $.isScrollToFixed('.header');
```

## Triggers ##

```javascript
  $('.header').trigger('remove'); // Removes scrollToFixed from the element.

  $('.header').trigger('resize'); // Resizes the spacer in case the fixed element height changes.
                                  // Good for size changes to the fixed element.
  
  $(window).scroll(); // Causes the plugin to recalculate the window scoll.
                      // Good for layout changes that could change the fixed element's response to
                      // the scroll.  Example: the fixed element height expands which should cause
                      // it to invoke its limit.

  $(window).resize(); // Causes the plugin to recalculate the element offsets, then the window scroll.
                      // Good for layout changes that could cause the fixed element to move.
                      // Example: the header height increases which should cause the fixed 
                      // element to fix at a greater vertical scroll position.  
```

## Options ##

* __marginTop__ - the number of pixels between the top of the window and the fixed element.
* __limit__ (value|function) - the vertical scroll position at which the element will begin to scroll up the page (absolutely).
* __bottom__ - (fix to bottom) the number of pixels between the bottom of the window and the bottom of the fixed element.
* __zIndex__ - the z-index of the fixed element.
* __spacerClass__ - the class to add to the spacer for styling purposes.
* __preFixed__ - the function handler triggered just before the element goes fixed.
* __fixed__ - the function handler triggered just after the element goes fixed.
* __postFixed__ - the function handler triggered just after the element leaves fixed.
* __preUnfixed__ - the function handler triggered just before the element goes unfixed.
* __unfixed__ - the function handler triggered just after the element goes unfixed.
* __postUnfixed__ - the function handler triggered just after the element leaves unfixed.
* __preAbsolute__ - the function handler triggered just before the element goes absolute.
* __postAbsolute__ - the function handler triggered just after the element leaves absolute.
* __offsets__ - (true|false|not present) some websites have needed an adjustment to the left position of the element due to something in their layout.  This option turns this adjustment on.

## Demos ##

* http://jsfiddle.net/y3qV5/434/ - floating cart summary with a limit.
* http://jsfiddle.net/k2R3G/81/  - fixed header; allows content to flow under it.
* http://jsfiddle.net/ZczEt/167/ - very full example: fixed header, footer and floating summary, with events.
* http://jsfiddle.net/y3qV5/435/ - 2 cart summaries that scroll up and stop at different intervals.
* http://jsfiddle.net/y3qV5/769/ - Another multi-cart example using floats, with section stops.

## Contributors ##

* [bigspotteddog](https://github.com/bigspotteddog)
* [megamattron](https://github.com/megamattron)
* [techpeace](https://github.com/techpeace)