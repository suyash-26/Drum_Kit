// detecting which html button is pressed
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var buttonInnerHtml=this.innerHTML;
        // makeSound(buttonInnerHtml);
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
       
    })
   
}

// detecting the key pressed
// for keypress key is keyword which returns the key which is pressed
 document.addEventListener("keypress",function(event){           // event is some variable which denote event occuring
    makeSound(event.key);
    buttonAnimation(event.key);
}) 

//declaring a function
function makeSound(key){
    switch(key){
        case("w"):
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case("a"):
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case("s"):
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case("d"):
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case("j"):
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case("k"):
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case("l"):
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        default:alert("Oops!  Invalid key 😬");
    }
}
function buttonAnimation(currentKey){
   var activeKey= document.querySelector("." + currentKey);
   activeKey.classList.add("pressed");
   setTimeout(function(){
       activeKey.classList.remove("pressed");
   },100);
}