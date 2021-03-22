function makeDividers (dividerText="The Hand Of All",dividerText2="",dividerText3="",dividerText4="",dividerText5="" )
{
    return `
    <div style="
    height:10vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;">
        
        <div style="
        width:90vw;
        height:.2em;
        background-color:black;"> </div>
        
        <div style="
        font-size:3.5em;
        margin-left:2em;"> 
            <span style="color:#21AAB5;"> ${dividerText} </span>
            <span style="color:#376293;">${dividerText2} </span>
            <span style="color:#5EBA92;">${dividerText3} </span>
            <span style="color:#F7D488;">${dividerText4} </span>
            <span style="color:#21AAB5;">${dividerText5} </span> 
        </div>
        
        <div style="
        width:90vw;
        height:.2em;
        background-color:black;" > </div>

    </div>

    `
}