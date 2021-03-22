function makeDividers ()
{
    return `
    <div style="
    height:10vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;">
        
        <div style="
        width:90vw;
        height:.2em;
        background-color:black;"> </div>
        
        <div style="
        font-size:2em;
        margin-left:2em;"> 
            some text here 
        </div>
        
        <div style="
        width:90vw;
        height:.2em;
        background-color:black;" > </div>

    </div>

    `
}