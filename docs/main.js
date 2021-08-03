var $cursor = $('.cursor');

function moveCursor(e) {

  $cursor.css({"top": e.pageY, "left": e.pageX});

  clearTimeout(timer2);

}

$(window).on('mousemove', moveCursor);
