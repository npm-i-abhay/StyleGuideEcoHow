function handleColor (bgColor= "#F7D488")
{
    return `
    <div id="circle" onclick="handleColor.giveShadow(this)" style="
    height:4em;
    width:4em;
    border-radius:2em;
    border:1px solid black;
    background-color:${bgColor};
    transition:all 1s;">

    </div>
    
    `
}

handleColor.giveShadow = (el) =>
{
   el.style.boxShadow = "2px 7px 5px #888888"
   
   
}