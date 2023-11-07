function init(){
//add your javascrip between these two lines of code
 var button=document.getElementById("entrybutton");
 
 function showText (){
	 var textentry=document.getElementById("entryinput").value;
	 var output=document.getElementById("textoutput");
	 output.innerHTML = textentry;
     alert("Zuha Ansari: "+ textentry);
    }

 button.addEventListener('click',showText);
}



window.addEventListener('load', init);
