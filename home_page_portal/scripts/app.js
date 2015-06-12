$(document).ready(function() {
  
  $(".carousel ul li").each(function() {
    $(this).addClass("left");
  });
  $(".carousel ul li").click(function() {
    $(this).prevAll("li").removeClass("current").removeClass("right").addClass("left");
    $(this).nextAll("li").removeClass("current").removeClass("left").addClass("right");
    $(this).removeClass("left").removeClass("right").addClass("current");
  });
  $(document).keydown(function(e) {
    var index = $(".carousel ul li").index($(".current"));
    var length = $(".carousel ul li").length - 1;
    // Left arrow 
    if (e.keyCode == 37) {
      if (index > 0) {
        index--;
      }
    }
    // right arrow
    if (e.keyCode == 39) {
      if (index < length) {
        index++;
      }
    }
  });

  var index = $(".carousel ul li").index($(".current"));
  $(".carousel ul li:eq(" + index + ")").prevAll("li").removeClass("current").removeClass("right").addClass("left");
  $(".carousel ul li:eq(" + index + ")").nextAll("li").removeClass("current").removeClass("left").addClass("right");
  $(".carousel ul li:lt(" + index + ")").each(function() {
    var tmpindex = $(".carousel ul li").index(this);
    $(this).css( "z-index", tmpindex );
  });
  $(".carousel ul li:gt(" + index + ")").each(function() {
    var tmpindex = $(".carousel ul li").index(this);
    $(this).css( "z-index", 100 - tmpindex );
  });
  $(".carousel ul li:eq(" + index + ")").css( "z-index", "1000" ).focus();

  // Changing the second heading depending on the clicked id.
  $("#news").click(function(){
    $("h2").text("News");
  });
  $("#entertainment").click(function(){
    $("h2").text("Entertainment")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #FFDD00, 0 0 13px #FFDD00, 0 0 15px #FFDD00");
  });
  $("#linux").click(function(){
    $("h2").text("Linux")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #00BF00, 0 0 13px #00BF00, 0 0 15px #00BF00");
  });
 $("#computers").click(function(){
    $("h2").text("Computers")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #DD0000, 0 0 13px #DD0000, 0 0 15px #DD0000");
  });
 $("#socialm").click(function(){
    $("h2").text("Social Media")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #BF5E00, 0 0 13px #BF5E00, 0 0 15px #BF5E00");
  });
 $("#learning").click(function(){
    $("h2").text("Learning")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #FF00BF, 0 0 13px #FF00BF, 0 0 15px #FF00BF");
  });
 $("#shopping").click(function(){
    $("h2").text("Shopping")
      .css("text-shadow", "0 0 3px white, 0 0 5px white, 0 0 8px white, 0 0 10px #9900FF, 0 0 13px #9900FF, 0 0 15px #9900FF");
  });

});
