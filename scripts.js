$(document).ready(function(){
  $("button#lightsOff").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#lightsOn").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
