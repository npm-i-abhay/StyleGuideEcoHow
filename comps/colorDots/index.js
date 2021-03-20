function handleColor (bgColor= "#F7D488")
{
    return `
    <div id="circle" onclick="handleColor.giveShadow(this)" style="
    height:2.5em;
    width:2.5em;
    border-radius:2em;
    margin-right:.3em;
  
    background-color:${bgColor};
    transition:all 1s;">

    </div>
    
    `
}
var tog = null

handleColor.giveShadow = (el) =>
{
    if (tog == null)
   { 
        el.style.boxShadow = "2px 7px 5px #888888";
        tog = true
        
    
   }
   else 
        {
            el.style.boxShadow = "none"
            tog = null
        }
}