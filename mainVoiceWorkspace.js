document.querySelector("#icon").innerHTML += makeHam();
document.querySelector("#sideBar").innerHTML += handleNavigation();

document.querySelector("#missionGlobe").innerHTML += globe()
document.querySelector("#illustration1").innerHTML += laptopLady()

// document.querySelector("#headingCare").innerHTML += missionHeading()

// document.querySelector("#paraText").innerHTML += missionParagraph   ();




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