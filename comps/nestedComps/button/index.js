function makeButton (buttColor="#F7D488", label="ENTER",height="3em", width="15vw")
{
    return`
    <div style="
    display:flex;
    align-items:center;
    justify-content:center;
    height:${height};
    width: ${width};
    border-radius:.7em;
    box-shadow:2px 2px 4px grey;
    background-color:${buttColor};">
    
         ${label}  

    </div>  
    
    `
}