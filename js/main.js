$(document).ready(function(){

$('#butt').on('click',function(){

    $('.intro').addClass('animated fadeOutRightBig'); 
    $('#butt').addClass('animated fadeOutRightBig');

})

$('one').on('scroll',function(){

    AOS.init();
})

});




