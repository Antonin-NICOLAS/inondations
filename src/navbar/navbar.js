var $element = $(".navigation");
var elementWidth = $element.outerWidth();
var elementHeight = $element.outerHeight();
var viewportX = $element.offset().left;
var viewportY = $element.offset().top;

$element.css({
  position: 'fixed',
  top: viewportY,
  left: viewportX
});

$element.draggable({
  containment: "window",
  scroll: false,
  drag: function (event, ui) {
    var top = ui.position.top;
    var left = ui.position.left;
    $element.css({
      top: Math.min(Math.max(top, 0), $(document).height() - elementHeight),
      left: Math.min(Math.max(left, 0), $(document).width() - elementWidth)
    });
  }
});

$(window).on('resize', function() {
  elementWidth = $element.outerWidth();
  elementHeight = $element.outerHeight();
});



// draggable on mobile devices//
var $element = $(".navigation");
var elementWidth = $element.outerWidth();
var elementHeight = $element.outerHeight();
var viewportX = $element.offset().left;
var viewportY = $element.offset().top;

$element.css({
  position: 'fixed',
  top: viewportY,
  left: viewportX
});

$element.on('touchmove', function(event) {
  event.preventDefault();
  var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
  var pageX = touch.pageX;
  var pageY = touch.pageY;

  $element.css({
    top: pageY - (elementHeight / 2),
    left: pageX - (elementWidth / 2)
  });
});

$element.draggable({
  containment: "window",
  scroll: false,
  drag: function (event, ui) {
    var top = ui.position.top;
    var left = ui.position.left;
    $element.css({
      top: Math.min(Math.max(top, 0), $(document).height() - elementHeight),
      left: Math.min(Math.max(left, 0), $(document).width() - elementWidth)
    });
  }
});

$(window).on('resize', function() {
  elementWidth = $element.outerWidth();
  elementHeight = $element.outerHeight();
});