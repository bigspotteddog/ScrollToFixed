ScrollToFixed - 06/21/2011
==========================

This plugin is used to fix elements to the top of the page, if the element
would have scrolled out of view, vertically; however, it does allow the
element to continue to move left or right with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward
once the vertical scroll has reached the target position; but, the
element will still move horizontally as the page is scrolled left or right.
Once the page has been scrolled back down past the target position, the
element will be restored to its original position on the page.

This plugin has been tested in Firefox 3/4, Google Chrome 10/11, Safari 5,
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

## Demos ##

* http://jsfiddle.net/y3qV5/7/ - floating cart summary with a limit.
* http://jsfiddle.net/k2R3G/2/ - fixed header; allows content to flow under it.
* http://jsfiddle.net/ZczEt/4/ - banner that gives way to a fixed header, with a fixed footer that has a limit.
* http://jsfiddle.net/y3qV5/21/ - 2 cart summaries that scroll up and stop at different intervals.