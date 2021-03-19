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
