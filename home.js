function click1(){
		document.getElementById('header').style.color = 'yellow';
}

function click2(){
		document.getElementById('header').style.color = 'purple';
}

function fadein(){
	$("#senku").fadeIn();
}

function fadeout(){
	$("#senku").fadeOut();
}

var time = 1;
var left = 0;
var bottom = 0;

document.addEventListener("keydown",event=>{

	var rect = document.getElementById('senku').getBoundingClientRect();

	if (event.keyCode == '39') { //right
		document.getElementById('header').innerHTML = "you pressed right. total keypress : " + time;
		left += 200
		document.getElementById('senku').style.left = left + "px";

		time++;
	}

	if (event.keyCode == '37') {//left
		document.getElementById('header').innerHTML = "you pressed left. total keypress : " + time;;
		left -=200;
		document.getElementById('senku').style.left = left + "px";

		time++;
	}

	if (event.keyCode == '38') {
		document.getElementById('header').innerHTML = "you pressed up. total keypress : " + time;
		bottom += 200 
		document.getElementById('senku').style.bottom = bottom + "px";

		time++;
	}

	if (event.keyCode == '40') {

		document.getElementById('header').innerHTML = "you pressed down. total keypress : " + time;
		bottom -= 200
		document.getElementById('senku').style.bottom = bottom + "px";

		time++;
	}


});