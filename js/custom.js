
$(function(){
   //banner part goes here

 $('.banner-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    speed:1000,
 });

//gallery part 

 $(function(){

   $('.venobox').venobox(); 
 
 
 
 
 });
  //counter part goes here

  $('.counter').counterUp({
    delay: 5,
    time: 1000
  });

//testimonial part goes here

 $('.testi-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  speed:1000,
});

//class part goes here
$('.brand-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:'.left',
  nextArrow:'.right',
  centerPadding:false,
  autoplay:true,
   focusOnSelect: true,
  autoplaySpeed: 2000,
});

//back to top

$('.back-to-top') .click(function(){
  $('html , body').animate({scrollTop:0} ,1500);


});

$(window).scroll(function(){

  var scrolling = $(this).scrollTop();
  if ( scrolling > 200 ){
      $('.back-to-top').fadeIn(500);
  }
 else{
  $('.back-to-top').fadeOut(500);
 }
 

});







});