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
    justify-content:space-around;
    transition: all 1s;
    background-color:${bgCol};" > 
    
    <img style="
    position:relative;
    object-fit:contain;
    height:70%;
    width:70%;" src="./images/dimensions.png">
    
    <div>
    aaaaaaaaaaassssss
    </div>

    </div>
    
    
    
    </div>
    `
}