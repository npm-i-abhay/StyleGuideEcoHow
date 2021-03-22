document.querySelector(".col1").innerHTML += colourSwatch();
document.querySelector(".col2").innerHTML += colourSwatch("class2","#21AAB5", "moveSwatch2");
document.querySelector(".col3").innerHTML += colourSwatch("class3","#5EBA92", "moveSwatch3");
document.querySelector(".col4").innerHTML += colourSwatch("class4","#F5F1ED", "moveSwatch4");
document.querySelector(".col5").innerHTML += colourSwatch("class5","#F7D488", "moveSwatch5");
document.querySelector(".color-row-1").innerHTML += colourText("id1","left","#326293", "Accent Color","");
document.querySelector(".color-row-1").innerHTML += colourText("id2","right","Represents","recycling, whether","it be a can or the", "earths soil");
document.querySelector(".color-row-2").innerHTML += colourText("id3", "left", "#21AAB5","Header Background", "Toggle Sliders","Misc Buttons");
document.querySelector(".color-row-2").innerHTML += colourText("id4","right","Cooler tone of our","base. Used to show","emphasis over the","background");
document.querySelector(".color-row-3").innerHTML += colourText("id5","left","#EBA92","background color","map color in logo");
document.querySelector(".color-row-3").innerHTML += colourText("id6","right","Used to represent","land. Perfect","representation of","going Green");
document.querySelector(".color-row-4").innerHTML += colourText("id7","left","#F5F1ED","Background colour","heading text");
document.querySelector(".color-row-4").innerHTML += colourText("id8","right","Used for White","space without the","blinding effect of","pure White");
document.querySelector(".color-row-5").innerHTML += colourText("id9","left","#F7D488","Colour for buttons");
document.querySelector(".color-row-5").innerHTML += colourText("id10","right","Used for an eye","grabbing color for","navigation");



function alignSwatches(id){
    document.querySelector(id).style.left= "1em"
    document.querySelector(id).style.transitionDuration="1s"
    document.querySelector(".class1").style.animationIterationCount = "0"
    document.querySelector(".class2").style.animationIterationCount = "0"
    document.querySelector(".class3").style.animationIterationCount = "0"
    document.querySelector(".class4").style.animationIterationCount = "0"
    document.querySelector(".class5").style.animationIterationCount = "0"

    }
    
    let blue =  document.querySelector(".col1")
    let lightBlue = document.querySelector(".col2")
    let green = document.querySelector(".col3")
    let cream = document.querySelector(".col4")
    let yellow = document.querySelector(".col5")

    
    blue.addEventListener("click", () => {
        document.querySelector("#id1").style.opacity="100";
        document.querySelector("#id1").style.transitionDuration="1s"
        document.querySelector("#id2").style.opacity="100";
        document.querySelector("#id2").style.transitionDuration="1s"
     });

     lightBlue.addEventListener("click", () => {
        document.querySelector("#id3").style.opacity="100";
        document.querySelector("#id3").style.transitionDuration="1s"
        document.querySelector("#id4").style.opacity="100";
        document.querySelector("#id4").style.transitionDuration="1s"
     });

     green.addEventListener("click", () => {
        document.querySelector("#id5").style.opacity="100";
        document.querySelector("#id5").style.transitionDuration="1s"
        document.querySelector("#id6").style.opacity="100";
        document.querySelector("#id6").style.transitionDuration="1s"
     });

     cream.addEventListener("click", () => {
        document.querySelector("#id7").style.opacity="100";
        document.querySelector("#id7").style.transitionDuration="1s"
        document.querySelector("#id8").style.opacity="100";
        document.querySelector("#id8").style.transitionDuration="1s"
     });

     yellow.addEventListener("click", () => {
        document.querySelector("#id9").style.opacity="100";
        document.querySelector("#id9").style.transitionDuration="1s"
        document.querySelector("#id10").style.opacity="100";
        document.querySelector("#id10").style.transitionDuration="1s"
     });