function colourSwatch(bgcolor="#326293", animName="moveSwatches",)
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
    transform-origin:center;
    "
    id="swatch"
    onclick="colourSwatch.alignSwatches()"
    >
    
    </div>
    
    `
}
colourSwatch.alignSwatches = () => {
    document.getElementsByClassName(".col2").innerHTML.style.left="0px";

}


//export const colour = colourSwatch();
