ScrollToFixed
==========================

This plugin is used to fix elements on the page (top, bottom, anywhere);
however, it still allows the element to continue to move left or right
with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward
once the vertical scroll has reached the target position; but, the
element will still move horizontally as the page is scrolled left or right.
Once the page has been scrolled back down past the target position, the
element will be restored to its original position on the page.

This plugin has been tested in Firefox 3+, Google Chrome 10+ Safari 5+,
and Internet Explorer 8/9.

## Usage ##

Default options:

    $(document).ready(function() {
        $('#mydiv').scrollToFixed();
    });

Margin and Limit options:

    $(document).ready(function() {
        $('#cart').scrollToFixed({ marginTop: 10, limit: $($('h2')[5]).offset().top });
    });

Fixed Header and Fixed Footer with a Limit

    // The fixed footer will go unfixed to reveal whatever is below it when scrolled
    // past the limit.
    $(document).ready(function() {
        $('.header').scrollToFixed();
        $('.footer').scrollToFixed( { bottom: 0, limit: $('.footer').offset().top } );
    });

Very Full Example

    $(document).ready(function() {
        $('.header').scrollToFixed();
        $('.header').bind('fixed', function() { $(this).css('color', 'red'); });
        $('.header').bind('unfixed', function() { $(this).css('color', ''); });

        $('#summary').scrollToFixed({
            marginTop: $('.header').outerHeight() + 10,
            limit: $('.footer').offset().top - $('#summary').outerHeight() - 10,
            zIndex: 999,
            fixed: function() {  },
        });
        $('#summary').bind('unfixed', function() {
            $(this).css('color', '');
            $('.header').trigger('unfixed');
        });
        $('#summary').bind('fixed', function() {
            $(this).css('color', 'red');
            $('.header').trigger('fixed');
        });

        $('.footer').scrollToFixed( {
            bottom: 0,
            limit: $('.footer').offset().top,
            preFixed: function() { $(this).css('color', 'blue'); },
            postFixed: function() { $(this).css('color', ''); },
        });
    });

## Demos ##

* http://jsfiddle.net/y3qV5/7/ - floating cart summary with a limit.
* http://jsfiddle.net/k2R3G/2/ - fixed header; allows content to flow under it.
* http://jsfiddle.net/ZczEt/15/ - very full example: fixed header, footer and floating summary, with events.
* http://jsfiddle.net/y3qV5/21/ - 2 cart summaries that scroll up and stop at different intervals.