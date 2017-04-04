$(document).ready(function() {
  $("h1").on("click", function(){
    $("html").mousemove(function(event){
      $(".name").offset({
        left: event.pageX,
        top: event.pageY
      });
    });
  });
  $("h1").on("click", function(){
    $("#yakkity")[0].play();
  });
});
