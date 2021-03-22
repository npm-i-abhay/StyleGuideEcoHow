function staticBlob (text="Logo Design", left="-15em", height="70%", width="70%", src="blob", top="-7em", leftt="-1em", top1="",left1="" )
{
    return `
    <div style="
    position:relative;
    top:${top1};
    left:${left1};" >
   <img style="
   object-fit:contain;
   position:relative;
   left:${left};
   height:${height};
   width:${width};
   " src="./images/${src}.png">
   
   <div style="
   position:relative;
   top:${top};
   left:${leftt};
   font-size:5em;
   width:55%;
   text-align:center;
   color:#F5F1ED;
   font-family: 'Chango', cursive;
   object-fit:contain;" > 
        ${text}
    </div>
   
    </div>
    `
}