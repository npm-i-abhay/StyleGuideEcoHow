function makeRuleContainer (placement="0", bgColor="#F7D488",divText="whatever the fuck", url="./images/stacked.png", high="90%", wide="90%", logName="whatever", logCol="#F5F1ED")
{
    return `
    
    <div style="
    display:flex;
    height:50vh;
    width: 90vw; 
    background-color:none;
    // border:2px solid black;
    justify-content:space-between;
    align-items:center;
    margin-bottom:.5em;
    position:relative;
    
    left:5em;" > 

    <div style="
    height:50vh;
    width:45vw;
    display:flex;
    font-size:3em;
    margin:1em;
    justify-content:center;
    align-items:center;
    order:${placement};
     "> 
        
    
        ${divText}
    
    
    </div>
    

    <div style="
    height:50vh;
    width:45vw;
    background-color:${bgColor};
    display:flex;
    flex-direction:column;
    align-items:center;
    // font-family:Georgia;
    color:${logCol};
    border-radius:2em;"> 
    
    <h1> ${logName}</h1>

    <img style="
    object-fit:contain;
    height:${high};
    width:${wide}" src="${url}">


    
    </div>




    </div>


    `
}