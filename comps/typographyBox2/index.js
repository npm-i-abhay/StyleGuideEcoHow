function typeBox2(bgcolor="#5EBA92")
{
    return `
 <div style="
 width:30em;
 height:50em;
 background-color:${bgcolor};
 border-radius: 40px;
 display:flex;

 flex-direction:column;
 margin:1em;


 ">
 <h1 style="
 color:#376293;
 font-size:48px;
 align-self:center;
 ">Text Style</h1>
 <hr style="
 width:80%;
 height:0.01em;
 background-color:#F5F1ED;
 ">
 <h1 style="
 color:#376293;
 font-size:36px;
 margin:1em;
 ">Regular</h1>

<ul style="
margin:1em;
font-size: 24px;
color:#F5F1ED;
">
<li>Main text</li>
<li>H3</li>
<li>Quiz section questions and answers</li>
<li>H4</li>
<li>Hint Text</li>
<li>Evaluation Questions</li>
<li>Evaluation Selection Values</li>
</ul>

<h1 style="
color:#376293;
font-size:36px;
margin:1em;
">Bold</h1>

<ul style="
margin:1em;
font-size: 24px;
color:#F5F1ED;
">
<li>Button Labels</li>

</ul>
 

 </div>
    `
}