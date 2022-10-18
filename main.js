// Create a reference for the canvas
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array=["Alpkey.png","Arrkey.png","numkry.png","otherkey.png","spkey.png"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
Alpkeywidth = 300;
Alpkeyheight = 100;

var background_image;
Alpkeyimage="Alpkey.png";

Alpkeyx = 100;
Alpkeyy = 100;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadbackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	Alpkey_imgTag = new Image();
    Alpkey_imgTag.onload = uploadAlpkey;
	Alpkey_imgTag.src = Alpkeyimage;  
}

function uploadbackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadAlpkey() {
	ctx.drawImage(Alpkey_imgTag,Alpkeyx,Alpkeyy,Alpkeywidth, Alpkeyheight);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		Alpkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("Alp key");
	}

}

function alphabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
