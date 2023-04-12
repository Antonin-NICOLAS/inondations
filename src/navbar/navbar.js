var $element = $(".navigation");
var elementWidth = $element.outerWidth();
var elementHeight = $element.outerHeight();
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var viewportX = $element.offset().left - $(window).scrollLeft();
var viewportY = $element.offset().top - $(window).scrollTop();

$element.css('position', 'absolute');

$(window).on('resize', function() {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
});

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var scrollLeft = $(window).scrollLeft();

  $element.css({
    top: Math.max(viewportY + scrollTop, 0),
    left: Math.max(viewportX + scrollLeft, 0)
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



// draggable on mobile devices//
var box = document.querySelector(".navigation");
window.onload = function () {

  box.addEventListener('touchmove', function (e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];

    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })

}
box.addEventListener('touchend', function (e) {
  // current box position.
  var x = parseInt(box.style.left);
  var y = parseInt(box.style.top);
})