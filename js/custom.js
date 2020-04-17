$(function () {


    $('.story_video').venobox({
        framewidth: '800px', // default: ''
        frameheight: '600px', // default: ''
        border: '3px', // default: '0'
        bgcolor: '#242424',
    });

// gallery filter: ''
var mixer = mixitup('.gallery_items');
// slider: ''
$('.slider_wrapper').slick({
    arrows: false,
    autoplay:true,
    infinite:true,
    dots:true
});

// slider-2 ''
$('.slider_wrapper2').slick({
    arrows: false,
    autoplay:true,
    infinite:true,
    dots:true
});


});

// Mobile menu ''

$(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });



// back to top ''

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




/*preloder*/

document.body.onload = function(){ 
  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    {
      preloader.classList.add('done');
    }
  }, 1000);
}