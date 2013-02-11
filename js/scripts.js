/* 
    A. On mouse over: 
    1. Expand 'vertical dimensions' of list item on hover to 100 pixels total
    2. Animation should take .5 seconds
    3. Change background color to 'orange' in CSS - not JavaScript. Hint use CSS3 'transition' property

    * http://www.css3.info/preview/css3-transitions/

    B. On mouse off: 
    1. Set original settings for 'vertical dimensions' & background color
    2. Same duration for mouse off

    * Reference: http://api.jquery.com/hover/
    * User animate():  http://api.jquery.com/animate/
    * Add class 'border': http://api.jquery.com/addClass/

*/ 







$('#color4').click(function(){
  $('.glyph').addClass('bluewblack');
})

$('#color4').click(function(){
  $('.glyph').removeClass('orangewwhite');
})

$('#color4').click(function(){
  $('.glyph').removeClass('blackwwhite');
})

$('#color4').click(function(){
  $('.glyph').removeClass('whitewblack');
})



$('#color3').click(function(){
  $('.glyph').addClass('orangewwhite');
})

$('#color3').click(function(){
  $('.glyph').removeClass('bluewblack');
})

$('#color3').click(function(){
  $('.glyph').removeClass('blackwwhite');
})

$('#color3').click(function(){
  $('.glyph').removeClass('whitewblack');
})



$('#color2').click(function(){
  $('.glyph').addClass('whitewblack');
})

$('#color2').click(function(){
  $('.glyph').removeClass('bluewblack');
})

$('#color2').click(function(){
  $('.glyph').removeClass('orangewwhite');
})

$('#color2').click(function(){
  $('.glyph').removeClass('blackwwhite');
})






$('#color1').click(function(){
  $('.glyph').addClass('blackwwhite');
})

$('#color1').click(function(){
  $('.glyph').removeClass('bluewblack');
})

$('#color1').click(function(){
  $('.glyph').removeClass('whitewblack');
})

$('#color1').click(function(){
  $('.glyph').removeClass('orangewwhite');
});




$('.glyph').click(function(){
  $(this).toggleClass('biggerversion');
})






