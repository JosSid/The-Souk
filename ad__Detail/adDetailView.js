import { adBodyView } from "../utils/adBodyView.js"

/**
 * 
 * @param {*} advertisment 
 * @returns HTML advertisment Detail
 */
export const buildAdById = (ad) => {
    return adBodyView(ad)
}

export const buildEmptyDetailAd = () => {
    return `
    <p>The requested advertisment does not exist</p>
    <a href="index.html"><button class="button__element">Go to advertisments</button></a>
    `
}