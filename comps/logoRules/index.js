function makeRuleContainer (placement="0", bgColor="#F7D488",divText="whatever the fuck", url="./images/stacked.png", high="90%", wide="90%")
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
    align-items:center;"> 
    
    <h2> whatever</h2>

    <img style="
    object-fit:contain;
    height:${high};
    width:${wide}" src="${url}">


    
    </div>




    </div>


    `
}