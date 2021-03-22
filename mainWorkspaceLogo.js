document.querySelector("#icon").innerHTML += makeHam();
document.querySelector("#sideBar").innerHTML += handleNavigation();







// logo components
document.querySelector("#separate1").innerHTML += makeDividers();
document.querySelector("#first").innerHTML += makeRuleContainer("","#F7D488","Stacked logo and word mark should always stay in the same size relationship.", "./images/stacked.png", "90%","90%","Stacked Logo");

document.querySelector("#second").innerHTML += makeRuleContainer("1", "#5EBA92","Logo and word mark should always stay in the same size relationship.Rarely used, other than display ads.", "./images/horizontal.png", "","", "Horizontal Logo" );

document.querySelector("#third").innerHTML += makeRuleContainer("", "#21AAB5","The white space around the logo is eqaul to the uppercase “E” used in the wordmark.The space between the logo mark and wordmark is 26 px.","./images/white space.png","","","Logo Space");

document.querySelector("#fourth").innerHTML += makeRuleContainer("1","#326293","The white space around the logo is eqaul to the uppercase “E” used in the wordmark. The space between the logo mark and wordmark is 13 px.","./images/whitespace verticle.png", "70%", "70%", "Logo Space" );

document.querySelector("#fifth",).innerHTML += makeRuleContainer("","#F5F1ED","The ideal dimensions of the logo are Width 113px height 114px.The Logo mustn’t be reduced to smaller dimensions as compared to its ideal dimensions for mobile devices","./images/dimensions.png","70%", "70%", "Logo Size", "#326293" );

document.querySelector("#separate2").innerHTML += makeDividers("Play", "The", "Colors", "With", "Care");

document.querySelector("#logoCanvas").innerHTML += makeCanvas ();


document.querySelector("#dot1").innerHTML += handleColor("#376297");
document.querySelector("#dot2").innerHTML += handleColor("#21AAB5");
document.querySelector("#dot3").innerHTML += handleColor("#5EBA92");
document.querySelector("#dot4").innerHTML += handleColor("#F5F1ED",".5px solid grey");
document.querySelector("#dot5").innerHTML += handleColor("#F7D488");
document.querySelector("#logoBlob").innerHTML += staticBlob();
// logo components ends here==========================


// mission/value components starts here=====

// mission/value components ends here=====





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
    document.querySelector("#changeBack").style.backgroundColor= "#376293";
    document.querySelector("#changeBack").style.boxShadow= "4px 4px 8px black";
    document.querySelector("#rightText").style.opacity = "100"
    document.querySelector("#wrongText").style.opacity = "0"

}
  


changeTwo.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#21AAB5"
    document.querySelector("#changeBack").style.boxShadow= "4px 4px 8px black";
    document.querySelector("#rightText").style.opacity = "100"
    document.querySelector("#wrongText").style.opacity = "0"
}
  


changeThree.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#5EBA92"
    document.querySelector("#changeBack").style.boxShadow= "4px 4px 8px black";
    document.querySelector("#wrongText").style.opacity = "100"
    document.querySelector("#rightText").style.opacity = "0"
}
   


changeFour.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#F5F1ED"
    document.querySelector("#changeBack").style.boxShadow= "4px 4px 8px black";
    document.querySelector("#rightText").style.opacity = "100"
    document.querySelector("#wrongText").style.opacity = "0"
}
   



changeFive.onclick = function ()
{
    document.querySelector("#changeBack").style.backgroundColor= "#F7D488"
    document.querySelector("#changeBack").style.boxShadow= "4px 4px 8px black";
    document.querySelector("#rightText").style.opacity = "100"
    document.querySelector("#wrongText").style.opacity = "0"
}
    