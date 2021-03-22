function colourSwatch(className="class1" ,bgcolor="#326293", animName="moveSwatches",)
{
    return `
    <div style="
    background-color: ${bgcolor};
    width:240px;
    height:240px;
    border-radius: 50%;
    margin:1em;
    animation-name:${animName}; 
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;"
    "
    class=${className}
    >
    
    </div>
    
    `
}






//export const colour = colourSwatch();
