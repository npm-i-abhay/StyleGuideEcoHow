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
        font-size:1.5em;
       
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
        padding:1em;
        
        font-size:1.5em;
        color: #F5F1ED;" href="#">
        
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
        font-size:1.5em;
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
        font-size:1.5em;
        color: #F5F1ED;" href="#">
        
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
        font-size:1.5em;
        color: #F5F1ED;" href="#">
        
            Typogrpahy
        
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
        font-size:1.5em;
        color: #F5F1ED;" href="#">
        
            Graphic Illustrations
        
        </a>
        
       
        
        
    
            
    
   
    </div>
    
    `
}


 handleNavigation.handleHover = (el) =>
{
   
    el.style.color = "red"
    el.style.transformOrigin = "left"
}
 handleNavigation.handleHover2 = (el) =>
{
   
    el.style.color = "green"
}


// export const navigation = handleNavigation();