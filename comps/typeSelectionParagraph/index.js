function selectionParagraph(heading="Primary", paragraph="Chango is the font we use for our logo as well as headings. We chose this font as it gives away a friendly and familiar feeling. Its readable when it comes to short texts or sentences and stands out.")
{
    return `
   
    <h1 style="font-size:48px; font-weight:bold;">${heading}<h1/>
    <p style="font-size:36px">${paragraph}
     </p>
    `
}




//export const typeSelectionParagraph = selectionParagraph();