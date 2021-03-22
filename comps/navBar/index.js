function handleNavigation ()
{
    return `
    <div style="
    font-family:helvetica;
    display: flex; 
    flex-direction: column;
    justify-content:space-evenly;
    background-color:#21AAB5;
    width:350px;
    transition:all 1s;
    height:100vh;
    ">
            
    
        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover" style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
       
        color: #F5F1ED;" href="./mainWorkspace.html">
        
            Home
        
        </a>


        <div style="
        
            width:300px;
            height:.1em;
            
            background-color:#F5F1ED;">
        
        </div>
        
        
        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  class="hover" style="
        text-decoration:none;
        transition:all 1s;
        padding:1em;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="./mainWorkspaceVoice.html">
        
            Voice
        
        </a>
        
        <div onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  style="
        
            width:300px;
            height:.1em;
            background-color:#F5F1ED;">
        
        </div>
        

        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  class="hover" style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="./mainWorkspaceLogo.html">
        
            Logo
        
        </a>
        

        <div style="
        
        width:300px;
        height:.1em;
        background-color:#F5F1ED;">
    
        </div>
    

       
        

        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  class="hover" style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="./mainWorkspaceColors.html">
        
            Color
        
        </a>
        

        <div style="
        
        width:300px;
        height:.1em;
        background-color:#F5F1ED;">
    
    </div>
    

        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="./mainWorkspaceTypography.html">
        
            Typography
        
        </a>
        
        <div style="
        
            width:300px;
            height:.1em;
            background-color:#F5F1ED;">
        
        </div>
        
        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="./mainWorkspaceGraphics.html">
        
            Graphic Illustrations
        
        </a>
        
        <div style="
        
            width:300px;
            height:.1em;
            background-color:#F5F1ED;">
        
        </div>
        
        
        <a onmouseover="handleNavigation.handleHover(this)"
        onmouseout="handleNavigation.handleHover2(this)" class="hover"  style="
        text-decoration:none;
        padding:1em;
        transition:all 1s;
        font-family: 'Chango', cursive;
        font-size:2em;
        color: #F5F1ED;" href="https://www.figma.com/file/j4SWx1tZfqEdTXIxRVTlsp/Prototype?node-id=0%3A1">
        
            Figma Prototype
        
        </a>
            
    
   
    </div>
    
    `
}


 handleNavigation.handleHover = (el) =>
{
   
    el.style.color = "#376293"
    el.style.transformOrigin = "left"
}
 handleNavigation.handleHover2 = (el) =>
{
   
    el.style.color = "#F5F1ED"
}


// export const navigation = handleNavigation();