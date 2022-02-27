window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("nav_menu01").style.color = "black";
        document.getElementById("line1").style.backgroundColor = "black";
        
    }  else {
			document.getElementById("nav_menu01").style.color = "white";
        document.getElementById("line1").style.backgroundColor = "white";
		}
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("nav_menu02").style.color = "black";
        document.getElementById("line2").style.backgroundColor = "black";
        
    }  else {
			document.getElementById("nav_menu02").style.color = "white";
        document.getElementById("line2").style.backgroundColor = "white";
		}
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("nav_menu03").style.color = "black";
        document.getElementById("line3").style.backgroundColor = "black";
        
    }  else {
			document.getElementById("nav_menu03").style.color = "white";
        document.getElementById("line3").style.backgroundColor = "white";
		}
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("nav_menu04").style.color = "black";
        document.getElementById("line4").style.backgroundColor = "black";
        
    }  else {
			document.getElementById("nav_menu04").style.color = "white";
        document.getElementById("line4").style.backgroundColor = "white";
		}
}
