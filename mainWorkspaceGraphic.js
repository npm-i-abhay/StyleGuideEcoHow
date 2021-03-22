document.querySelector("#icon").innerHTML += makeHam();
document.querySelector("#sideBar").innerHTML += handleNavigation();
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






// components unique to this page starts here


document.querySelector("#compBlob").innerHTML += staticBlob("Components", "0","50%", "50%", "blob1","-6.5em","0", "0","65em"); 




document.querySelector("#l-cont1").innerHTML += makeHeader();
document.querySelector("#l-cont2").innerHTML += makeHeader("none", "Organic Waste", "1px solid black", "2px 2px 4px grey");

document.querySelector("#l-cont3").innerHTML += makeNavIcon();

document.querySelector("#l-cont4").innerHTML += makeButton();
document.querySelector("#l-cont5").innerHTML += makeButton("#21AAB5", "Quiz", "3.7em", "5vw");

document.querySelector("#l-cont6").innerHTML += makeTips();

document.querySelector("#r-cont1").innerHTML += makeHeader("none", "Next Section ", "1px solid black", "2px 2px 4px grey");

document.querySelector("#r-cont2").innerHTML += makeNavIcon("&rarr;","#21aab5", "3em", "3em", "3em" );

document.querySelector("#r-cont3").innerHTML += makeNavIcon("?");

document.querySelector("#r-cont5").innerHTML += makeCircleHeader();


document.querySelector("#illustrationBlob").innerHTML += staticBlob("Illustrations", "0","50%", "50%", "blob2","-6.5em","0", "0","-10em");

document.querySelector("#ill1").innerHTML += makeIllust();
document.querySelector("#ill1").innerHTML += makeIllust("2");
document.querySelector("#ill1").innerHTML += makeIllust("3");
document.querySelector("#ill1").innerHTML += makeIllust("4");
document.querySelector("#ill2").innerHTML += makeIllust("5");
document.querySelector("#ill2").innerHTML += makeIllust("6");
document.querySelector("#ill2").innerHTML += makeIllust("7");
document.querySelector("#ill2").innerHTML += makeIllust("8");
document.querySelector("#ill3").innerHTML += makeIllust("9", "30%", "30%");
document.querySelector("#ill3").innerHTML += makeIllust("10", "20%", "20%");
document.querySelector("#ill3").innerHTML += makeIllust("11","20%", "20%");
document.querySelector("#ill3").innerHTML += makeIllust("12","30%", "30%");



document.querySelector("#animationBlob").innerHTML += staticBlob("Animations", "0","50%", "50%", "blob4","-6.5em","0", "0","65em");

document.querySelector("#animCont1").innerHTML += 
makeAnimComps("0", "blah blah", "./images/team4.gif","50vh", "45vw"  );

document.querySelector("#animCont2").innerHTML += 
makeAnimComps("1", "blah blah", "./images/team4.gif", "50vh", "45vw" );
document.querySelector("#animCont3").innerHTML += 
makeAnimComps("0", "blah blah", "./images/team4.gif", "50vh", "45vw" );
document.querySelector("#animCont4").innerHTML += 
makeAnimComps("1", "blah blah", "./images/team4.4.gif", "50vh", "45vw" );
document.querySelector("#animCont5").innerHTML += 
makeAnimComps("0", "blah blah", "./images/team4.5.gif", "50vh", "45vw" );
document.querySelector("#animCont6").innerHTML += 
makeAnimComps("1", "blah blah", "./images/team4.gif", "50vh", "45vw" );
document.querySelector("#animCont7").innerHTML += 
makeAnimComps("0", "blah blah", "./images/team4.gif", "50vh", "45vw" );

