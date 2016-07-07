
var cardWidth  = 200;
var cardHeight = 300;
var distanceBetweenLines = cardHeight/14;
var firstLineY           = cardHeight/3;


var card = Raphael('flashcard', cardWidth, cardHeight);

var drawStaffLines = function () {

    var y = firstLineY;
    for (var i = 0; i < 5; i++) {
      // M: move to x, y   -  H: horizontal line to x
      card.path( ['M', 0, y, 'H', cardWidth] );
      y += distanceBetweenLines;
    }
};  // drawStaffLines

drawStaffLines();