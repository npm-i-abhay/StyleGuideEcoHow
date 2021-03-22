function colourText(align="left", text1="#F5F1ED", text2="forefront", text3="heading text")
{
    return `
    <p style="
    font-size:36px;
    font-family: Montserrat;
    color:white;
    margin:2em;
    opacity:0;
    text-align:${align};
    ">
    ${text1}
    <br>
    ${text2}
    <br>
    ${text3}</p>
    
    `
}




//export const text = colourText();