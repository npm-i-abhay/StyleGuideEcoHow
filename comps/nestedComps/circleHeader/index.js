function makeCircleHeader (bgColor="#5EBA92", headTagC="Fruits")
{
    return`
    
    <div style="display:flex;">
       
    
        <div style="
        text-align:center;
        display:flex;
        align-items:center;
        justify-content:center;
        height:3em;
        width: 25vw;
        background-color:${bgColor};">
        
        ${headTagC}

        </div>
    

        <div style="
        height:7em;
        width:7em;
        border-radius:5em;
        position:relative;
        left:-1em;
        top:-2em;
        background-color:red;" >  
        
        </div>
    </div>    
    
        
        
    `
}