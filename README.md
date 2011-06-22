ScrollToFixed - 06/21/2011
==========================

This plugin is used to fix elements to the top of the page, if the element
would have been scrolled out of view, vertically; however, it does allow the
element to continue to move left or right with the horizontal scroll.

Given an option marginTop, the element will stop moving vertically upward
once the vertical scroll has reached the target position; but, the
element will still move horizontally as the page is scrolled left or right.
Once the page has been scrolled back down passed the target position, the
element will be restored to its original position on the page.

This plugin has been tested in Firefox 3/4, Google Chrome 10/11, Safari 5,
and Internet Explorer 8/9.

## Usage ##

    $(document).ready(function() {
        $('h2').scrollToFixed();
    });