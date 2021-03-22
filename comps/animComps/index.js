function makeAnimComps (placement="0", divText="whatever the fuck", url="./images/stacked.png", high="90%", wide="90%")
{
    return `
    
    <div style="
    display:flex;
    height:50vh;
    width: 80vw; 
    background-color:none;
    // border:2px solid black;
    justify-content:space-around;
    align-items:center;
    margin-bottom:.5em;
    position:relative;
    
    left:5em;" > 

    <div style="
    height:50vh;
    width:40vw;
    display:flex;
    justify-content:center;
    align-items:center;
    order:${placement};
     "> 
        
    
        ${divText}
    
    
    </div>
    

    <div style="
    height:50vh;
    width:40vw;
    border-radius:2em;
    
    align-items:center;"> 

    <img style="
    object-fit:contain;
    height:${high};
    border-radius:2em;
    width:${wide}" src="${url}">


    
    </div>




    </div>


    `
}