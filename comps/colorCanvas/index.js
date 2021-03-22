function makeCanvas (bgCol="#21AAB5")
{
    return`
    <div    style="
    height:70vh;
    width:80vw; 
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    left:10em;
    border:3px solid black ;
    transition: all 1s;
">

    <div id="changeBack" style="
    height:69vh;
    width:99vw;
    margin:.5em;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 1s;
    background-color:${bgCol};" > 
    
    <img style="
    position:relative;
    object-fit:contain;
    height:70%;
    width:70%;" src="./images/dimensions.png">
    
    <div style="
    opacity:1;
    transition:all 1s;
    position:relative;
    right:-10em;
    font-size:2em;
    font-family: 'Montserrat', sans-serif;
    width:50%;" id="rightText">
    The logo is being displayed over different hues and its only permitted to be used over backgrounds with good contrast 
    </div>
    
    <div style="
    opacity:0;
    transition:all 1s;
   
    font-size:2em;
    font-family: 'Montserrat', sans-serif;
    
    width:50%
    font-size:2em;
    font-family: 'Montserrat', sans-serif" id="wrongText" >
    
        Logo is not permitted to be used over this color due to extremely low contrast

    </div>

    </div>
    
    
    
    </div>
    `
}