$(".openNav").on("click",function() {
    $(".sidenav").css("left","0")
})
$(".close").on("click",function () {
    $(".sidenav").css("left","-240px")
})

$(".acc h3").on("click",function () {
    $(this).next().slideToggle();
    $(".acc div").not( $(this).next()).slideUp();
})
// counter 
let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML = days + "D "
   document.getElementById("timeH").innerHTML = hours + "H "
    document.getElementById("timeM").innerHTML = minutes + "M "
 document.getElementById("timeS").innerHTML = seconds + "S "
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "Party Time";
  }
}, 1000);


// footer
$("textarea").on("keyup",function () {
let myLentgh = $(this).val().length   
$(".chars").text(
1000 - myLentgh <= 0 ? "No More chars" : 1000 - myLentgh

)
})