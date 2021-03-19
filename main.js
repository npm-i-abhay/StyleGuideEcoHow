document.querySelector("#whatever").innerHTML += handleNavigation();
document.querySelector("#whatever2").innerHTML += makeHam();
document.querySelector("#colorDot1").innerHTML += handleColor();
document.querySelector("#colorDot2").innerHTML += handleColor("blue");
document.querySelector("#canvas").innerHTML += makeCanvas();


var toggle = null

function moveNavigation ()
{   
    if (toggle == null)
    {
        document.querySelector("#whatever").style.left = "0px"
        toggle = true
    }
    
    else if (toggle != null)
    {
        document.querySelector("#whatever").style.left = "-500px"
        toggle = null
        
    }
}



var changeOne = document.querySelector("#colorDot1");
console.log(changeOne)
var changeTwo = document.querySelector("#colorDot2");


changeOne.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "red"
}
    

changeTwo.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "blue"
}
    

