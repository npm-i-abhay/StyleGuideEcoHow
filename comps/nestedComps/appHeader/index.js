function makeHeader (bgColor="#5EBA92", headTag="Organic Waste Recap", border="none", shadow="none")
{
    return`
    <div style="
    text-align:center;
    padding:1em;
    // height:3em;
    width: 25vw;
    box-shadow:${shadow};
    border:${border};
    background-color:${bgColor};">
    
        ${headTag}

    </div>  
    
    `
}