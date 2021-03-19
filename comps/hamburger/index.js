function makeHam ()
{
    return`
    
    <div id="moveHam" onclick=animateIcon() style="position:relative; transition:all 1s;
    right:0px;" >

    <div id="line1" style="
    height:.3em;
    width:50px;
    margin:.5em;
    background-color:orange;
    transition:all 1s;" > 
    </div>

    <div id="line2"  style="
    height:.3em;
    width:50px;
    margin:.5em;
    background-color:orange;
    transition:all 1s;" > 
    </div>

    <div id="line3"  style="
    height:.3em;
    width:50px;
    margin:.5em;
    background-color:orange;
    transition:all 1s;" > 
    </div>
    
    </div>
    `
}

var Foggle = null

function animateIcon()
{
    if (Foggle == null)
        {   
            document.querySelector("#line1").style.transform = "rotate(405deg) translate(12px, 6px)"
            document.querySelector("#line3").style.transform = "rotate(-405deg) translate(11px, -6px)"
            document.querySelector("#line2").style.opacity = "0"
            Foggle = true
        }

      else if (Foggle != null)
      {
        document.querySelector("#line1").style.transform = "rotate(0deg) translate(0,0)"
        document.querySelector("#line3").style.transform = "rotate(0deg) translate(0, 0)"
        document.querySelector("#line2").style.opacity = "1"
        Foggle = null
      }  
}

// export const hamburger = makeHam ();


