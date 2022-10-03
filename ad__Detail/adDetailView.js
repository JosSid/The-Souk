/**
 * 
 * @param {*} advertisment 
 * @returns HTML advertisment Detail
 */
export const buildAdById = (ad) => {
    return `
    <h2 class="ad__statement">${ad.statement}</h2>
    <h2 class="ad__name">${ad.name}</h2>
    <img class="ad__photo" src="${ad.photo}" alt="${ad.name}">
    <h3 class="ad__description">${ad.description}</h3>
    <h2 class="ad__price">${ad.price}</h2>
    `
}

export const buildEmptyDetailAd = () => {
    return `
    <p>The requested advertisment does not exist</p>
    <a href="index.html"><button>Go to advertisments</button></a>
    `
}