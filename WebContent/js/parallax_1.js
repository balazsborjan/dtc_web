var top_spacing = 15;
var waypoint_offset = 50;

nav_container.waypoint({

  handler: function(event, direction) {

    if (direction == 'down') {

      nav_container.css({ 'height' : nav.outerHeight() });
      nav.addClass("sticky")
         .stop()
         .css("top", -nav.outerHeight())
         .animate({"top" : top_spacing});

    } else {

      nav_container.css({ 'height' : 'auto' });
      nav.removeClass("sticky")
         .stop()
         .css("top", nav.outerHeight() + waypoint_offset)
         .animate({"top" : ""});

    }

  },

  offset: function() {
    return &mdash;(nav.outerHeight() + waypoint_offset);
  }

});