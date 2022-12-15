//ADD 
$("#a").on("click", function() {
  var num1 = Number($("#num1").val());
  var num2 = Number($("#num2").val());
  var answer = num1 + num2;
  $("h3").text("YOUR FUCKIN' ANSWER IS " + answer);
  if (answer <= 100 && answer >= 0 ) {
    $(".response").text("Really? Couldn't figure that shit out on your own, huh?");
  };   
  if (num1 === 69 || num2 ===69) {
  window.open("https://www.youtube.com/watch?v=UBX8MWYel3s&ab_channel=JeffSandberg");
};
  setTimeout(function () {
    $("h3").text(" ");
    $(".response").text(" ");
  }, 3000);
});


//SUBTRACT 
$("#b").on("click", function() {
  var sub1 = Number($("#sub1").val());
  var sub2 = Number($("#sub2").val());
  var subtraction = sub1 - sub2;
  $("h3").text("YOUR FUCKIN' ANSWER IS " + subtraction);
  if (subtraction <= 100 && subtraction >= 0 ) {
    $(".response").text("Really? Couldn't figure that shit out on your own, huh?");
  };
  
  setTimeout(function () {
    $("h3").text(" ");
    $(".response").text(" ");
  }, 3000);
});

//DIVIDE 
$("#c").on("click", function() {
  var div1 = Number($("#div1").val());
  var div2 = Number($("#div2").val());
  var divide = div1 / div2;
  if (div2 === 0) {
    $("h3").text("SHUT THE FUCK UP. YOU KNOW YOU CAN'T DIVIDE BY ZERO.");
  } else {
    $("h3").text("YOUR FUCKIN' ANSWER IS " + divide);
  };
  setTimeout(function () {
    $("h3").text(" ");
    $(".response").text(" ");
  }, 3000);
});

//MULTIPLY 
$("#d").on("click", function() {
  var m1 = Number($("#m1").val());
  var m2 = Number($("#m2").val());
  var mult = m1 * m2;
  $("h3").text("YOUR FUCKIN' ANSWER IS " + mult);
  setTimeout(function () {
    $("h3").text(" ");
    $(".response").text(" ");
  }, 3000);
});
