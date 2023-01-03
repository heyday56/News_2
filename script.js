"use strict"
function showUser(){
	const show=document.querySelector("#usernameLabel");
	document.querySelector("#username").style.marginTop=0;
	show.style.fontSize="25px";
	show.style.marginTop="25px";
	show.textContent="Type Username";
}
function showPass(){
	const show=document.querySelector("#passwordLabel");
	document.querySelector("#password").style.marginTop=0;
	show.style.fontSize="25px";
	show.style.marginTop="25px";
	show.textContent="Type Username";
}

function validateLogin(){
  const passVal=document.querySelector("#password").value;
  const userVal=document.querySelector("#username").vlaue;
  if(passVal.indexOf("  ")>-1 || userVal.indexOf("  ")>-1 || userVal=="" ||userVal.indexOf("=")>-1 || passVal.length<8 ||passVal.indexOf("=")>-1){
  	document.querySelector("#message").textContent="Username and password are required, give hard password.";
  	return false;
  }else{
  	return true;
  }

}
