document.querySelector("#icon").innerHTML += makeHam();
document.querySelector("#sideBar").innerHTML += handleNavigation();




// logo components
document.querySelector("#separate1").innerHTML += makeDividers();
document.querySelector("#first").innerHTML += makeRuleContainer("","#F7D488","DUMMY");

document.querySelector("#second").innerHTML += makeRuleContainer("1", "#5EBA92","dummy", "./images/horizontal.png" );

document.querySelector("#third").innerHTML += makeRuleContainer("", "#21AAB5","dummy","./images/white space.png" );

document.querySelector("#fourth").innerHTML += makeRuleContainer("1","#326293","dummy","./images/whitespace verticle.png", "80%", "80%" );

document.querySelector("#fifth",).innerHTML += makeRuleContainer("","#F5F1ED","dummy","./images/dimensions.png","80%", "80%" );

document.querySelector("#separate2").innerHTML += makeDividers();

document.querySelector("#logoCanvas").innerHTML += makeCanvas ("BLACK");


document.querySelector("#dot1").innerHTML += handleColor("#376297");
document.querySelector("#dot2").innerHTML += handleColor("#21AAB5");
document.querySelector("#dot3").innerHTML += handleColor("#5EBA92");
document.querySelector("#dot4").innerHTML += handleColor("#F5F1ED");
document.querySelector("#dot5").innerHTML += handleColor("#F7D488");

// logo components ends here==========================








// functionality
var toggle = null

function moveNavigation ()
{   
    if (toggle == null)
    {
        document.querySelector("#sideBar").style.right = "0px"
        document.querySelector("#moveHam").style.right = "350px"
        toggle = true
    }
    
    else if (toggle != null)
    {
        document.querySelector("#sideBar").style.right = "-350px"
        document.querySelector("#moveHam").style.right = "0px"
        toggle = null
        
    }
}




// functionality for color dots===================================
var changeOne = document.querySelector("#dot1");
var changeTwo = document.querySelector("#dot2");
var changeThree = document.querySelector("#dot3");
var changeFour = document.querySelector("#dot4");
var changeFive = document.querySelector("#dot5");


changeOne.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#376293"
}
  


changeTwo.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#21AAB5"
}
  


changeThree.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#5EBA92"
}
   


changeFour.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#F5F1ED"
}
   



changeFive.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#F7D488"
}
    