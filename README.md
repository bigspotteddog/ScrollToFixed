**Demo**: http://bigspotteddog.github.com/ScrollToFixed/

*More [fiddle](http://jsfiddle.net/) demo links [below](#demos).*

ScrollToFixed
==========================

This jQuery plugin is used to fix elements on the page (top, bottom, anywhere); however, it still allows the element to continue to move left or right with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward once the vertical scroll has reached the target position; but, the element will still move horizontally as the page is scrolled left or right. Once the page has been scrolled back down past the target position, the element will be restored to its original position on the page.

This plugin has been tested in Firefox 3+, Google Chrome 10+, Safari 5+, Internet Explorer 8/9, and Opera 11.60+.

This plugin was inspired by the excellent tutorial presented by Remy Sharp, titled "Fixed Floating Elements". You will find that tutorial [here](http://jqueryfordesigners.com/fixed-floating-elements/).

## Notices ##

**IMPORTANT**: The latest version of this plugin reverts the offset adjustment code that added the difference between the left offset and position to the left offset.  For anyone that needed it, that code is now turned on by using the **offsets: true** option.

**UPDATE**: A new option 'dontCheckForPositionFixedSupport' was added to disable the check for position:fixed support. Some iOS and Android vesions now support position:fixed; we attempt to detect support and continue instantiating the plugin if supported.

**UPDATE**: The fixed position support detection (above) is now turned off completely.

**UPDATE**: The "remove" trigger was renamed as "detach" to avoid the new Google Chrome (24) native "remove" method.

**UPDATE**: The 'dontCheckForPositionFixedSupport' option was commented out as it did not accurately detect support.

**UPDATE**: A new option was added by [murb](https://github.com/murb), 'dontSetWidth', for box-sizing: border-box that does not set the width on the target element when it goes fixed or absolute.

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
  $('.header').trigger('detach.ScrollToFixed'); // Removes scrollToFixed from the element.  The
                                                // namespace ensures remove will not be called
                                                // on other plugins that may be listening for
                                                // that event!  NOTE: Renamed as "detach" to
                                                // avoid the new Chrome native "remove" method.

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

* __marginTop__ (value|function) - the number of pixels between the top of the window and the fixed element.
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
* __minWidth__ (number) - the minimum width the window must be to "fix" the target element.  Turns off the functionaility when the window width is less than specified.
* __maxWidth__ (number) - the maximum width the window must be to "fix" the target element.  Turns off the functionaility when the window width is more than specified.
* __dontCheckForPositionFixedSupport__ - (true|false|not present) some devices do not support position fixed; we check to see if it does.  This option turns off that check if set to true.
* __dontSetWidth__ - (true|false|not set) box sizing that does not set the width on the target element when it goes fixed or absolute.
* __removeOffsets__ - (true|false|not set) recalculate top offset and delete left offset when the element goes absolute.

## Demos ##

* http://jsfiddle.net/y3qV5/434/ - floating cart summary with a limit.
* http://jsfiddle.net/k2R3G/81/  - fixed header; allows content to flow under it.
* http://jsfiddle.net/ZczEt/167/ - very full example: fixed header, footer and floating summary, with events.
* http://jsfiddle.net/y3qV5/435/ - 2 cart summaries that scroll up and stop at different intervals.
* http://jsfiddle.net/y3qV5/769/ - Another multi-cart example using floats, with section stops.
* http://jsfiddle.net/ZZYpG/68/   - Endlessly scrolling date markers.
* http://jsfiddle.net/y3qV5/1730/ - Yahoo's new sidebar.
