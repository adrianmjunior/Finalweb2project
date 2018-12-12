$(document).ready(function(){

$('#btn-animate').on('click',function(){

    $('#logo').addClass('animated fadeOutRightBig'); 
    $('#btn-animate').addClass('animated fadeOutRightBig');

})

$('#slidebutton').on('click',function(){

    $('#pics').hide();

})

setTimeout(function(){
    $('.navbar').fadeIn(200);
},500);
});




