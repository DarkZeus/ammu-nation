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
$(window).on('load', function() {
  $('.loader-text').delay(350).fadeOut('slow');
});

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};