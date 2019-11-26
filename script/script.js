//
menu.onclick=function myFunction() {
	var x = document.getElementById('myTopnav');
	
		if(x.className === "topnav"){
			x.className += " responsive";
		}
		else{
			x.className = "topnav";
		}	
}
//for hamburger menu
document.querySelectorAll(".animated-icon1").forEach(btn =>
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    btn.classList.toggle("open");
  })
);
/*$(document).ready(function () {
  $('.animated-icon1').click(function () {
    $('.animated-icon1').toggleClass('open');
  });
});*/