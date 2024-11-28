var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right=="-150px";

menubtn.onclick = function() {
    if(sideNav.style.right=="-150px"){
        sideNav.style.right="0";
        menu.src = "images/close.png";
    }
    else{
        sideNav.style.right="-150px";
        menu.src = "images/list.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});