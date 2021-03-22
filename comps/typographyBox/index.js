function typeBox(text1="default", text2="default", heading="Text Style", width="30em", height="20em", fontSize="48px",bgcolor="#21AAB5", text3="")
{
    return `
 <div style="
 width:${width};
 height:${height};
 background-color:${bgcolor};
 border-radius: 40px;
 display:flex;
 align-items:center;
 flex-direction:column;
 margin:1em;


 ">
 <h1 style="
 color:#376293;
 font-size:${fontSize};
 ">${heading}</h1>
  <hr style="
 width:80%;
 height:0.01em;
 background-color:#F5F1ED;
 ">
<p style="
color:#F5F1ED;
font-size:25px;
width:80%;
">${text1}
   <br>
   <br>
   ${text2} 
   <br>
   <br>
   ${text3}
</p>

 </div>
    `
}
