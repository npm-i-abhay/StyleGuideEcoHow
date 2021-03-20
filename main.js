document.querySelector("#whatever").innerHTML += handleNavigation();
document.querySelector("#whatever2").innerHTML += makeHam();
document.querySelector("#colorDot1").innerHTML += handleColor();
document.querySelector("#colorDot2").innerHTML += handleColor("blue");
document.querySelector("#canvas").innerHTML += makeCanvas();
document.querySelector("#logoCont").innerHTML += makeRuleContainer("", "#F7D488","Hi my name is SlimShady");
document.querySelector("#logoCont2").innerHTML += makeRuleContainer("1", "#5EBA92");
document.querySelector("#logoCont3").innerHTML += makeRuleContainer("", "#21AAB5","blarg blargvjkldasjgdsakvwsa","./images/horizontal.png" );

document.querySelector("#slide").innerHTML += makeSlider();

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



// var changeOne = document.querySelector("#colorDot1");
// console.log(changeOne)
// var changeTwo = document.querySelector("#colorDot2");


// changeOne.onclick = function ()
// {
//     document.querySelector("#changeBack").style.backgroundColor= "red"
// }
    

// changeTwo.onclick = function ()
// {
//     document.querySelector("#changeBack").style.backgroundColor= "blue"
// }
    

