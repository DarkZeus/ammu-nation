(function($) {
$(function() {
  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$('.game-render').attr('src', "assets/img/render/"+ getRandomInt(1,5) +".png");
})(jQuery);

$(document).ready(function() {
  function preloadImages(array) {
      if (!preloadImages.list) {
          preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
          var img = new Image();
          img.onload = function() {
              var index = list.indexOf(this);
              if (index !== -1) {
                  list.splice(index, 1);
              }
          }
          list.push(img);
          img.src = array[i];
      }
  }

  preloadImages(["assets/img/render/1.png", "assets/img/render/2.png", "assets/img/render/3.png", "assets/img/render/4.png", "assets/img/render/5.png", "assets/img/jumbotron-bg.jpg", "assets/img/panorama.jpg"]);

});
$(window).on('load', function() {
  $('.loader-text').delay(350).fadeOut('slow');
});