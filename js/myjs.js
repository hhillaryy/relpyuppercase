$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var messageInput = $("input#message").val();
    var m2= messageInput.toUpperCase();
    $(".message").text(m2);
    $("#request").show();
    event.preventDefault();
  });
});

//
// console.log("stuff here");
