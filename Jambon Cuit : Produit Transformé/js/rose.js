
$(document).ready(function(){

$(window).scroll(function(){
    $(".page2").css("opacity", 0 - $(window).scrollTop() / 250);
  });

});