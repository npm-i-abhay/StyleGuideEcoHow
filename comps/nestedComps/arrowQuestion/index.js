 function makeNavIcon (textCode=" &larr;", backColor="#F7D488", he="1.5em", wi="1.5em", font="2em", radius="3em" )
 {
     return`
     <div style="
     height:${he};
     display:flex;
     align-items:center;
     justify-content:center;
     width:${wi};
     border-radius:${radius};
     background-color:${backColor} ;
     font-size:${font};
     font-weight:bolder;
     text-align:center;">
     ${textCode}
     </div>
     
     `
 }