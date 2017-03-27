$ (function() {

  var suits = ["clubs", "spades", "hearts", "diamonds"];
  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      $("ul").append("<li>" + rank + " of " + suit + "</li>");
    });
  });

});
