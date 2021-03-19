import {colour} from '../comps/colourSwatches/'
import {heading} from '../comps/missionHeadings'
import {text} from '../comps/colourText'
import {lady} from '../comps/laptopLady'
import {missionText} from '../comps/missionParagraph'
import {fontPageHeadings} from '../comps/fontHeadings'
import {typeSelectionParagraph} from '../comps/typeSelectionParagraph'
import {fontSizeText} from '../comps/fontSizes'
import {styles} from '../comps/textStyles'
import {logo} from '../comps/logo'




export default 
{
    title: "Animated Components"
}

export const mySwatch = () => colour;
export const myHeadings = () => heading;
export const myColourText = () => text;
export const myLady = () => lady;
export const myMissionText = () => missionText;
export const myFontHeadings = () => fontPageHeadings;
export const mySelectionParagraphs = () => typeSelectionParagraph;
export const myFontSizes = () => fontSizeText;
export const mytextStyles = () => styles;
export const myLogo = () => logo;


