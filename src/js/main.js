$(document).ready(function(){
  $('.news__slider').slick({
    autoplay: false,
    dots: true,
    appendDots: $('.slick_dots_con_news'),
    pauseOnDotsHover: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },  
    ]
  });
  
    $('.left').click(function(){
      $('.news__slider').slick('slickPrev');
    });
    
    $('.right').click(function(){
      $('.news__slider').slick('slickNext');
    });

    // Второй сладер

  $('.projects__slider').slick({
    autoplay: true,
    dots: true,
    appendDots: $('.slick_dots_con_project'),
    pauseOnDotsHover: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },      
    ]
  });

  $('.project__left').click(function(){
    $('.projects__slider').slick('slickPrev');
  });
  
  $('.project__right').click(function(){
    $('.projects__slider').slick('slickNext');
  });


  var $videoSrc;  
$('.video-block-right__title').click(function() {
    $videoSrc = $(this).data( "src" );
  console.log($videoSrc);
});  
  

$('#myModal').on('shown.bs.modal', function (e) {
    
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
})

$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
  
  
});