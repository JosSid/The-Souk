/**
 * 
 * @param {*} advertisment 
 * @returns HTML advertisment Detail
 */
export const buildAdById = (ad) => {
    return `
    <h2 class="ad__statement">${ad.statement}</h2>
    <h2 class="ad__name">${ad.name}</h2>
    <h4 class="ad__username">User: ${ad.user.username}</h4>
    <div class="photo__frame">
        <img class="ad__photo" src="${ad.photo}" alt="${ad.name}">
    </div>
    <h3 class="ad__description">Description: ${ad.description}</h3>
    <h2 class="ad__price">Price: ${ad.price}</h2>
    `
}

export const buildEmptyDetailAd = () => {
    return `
    <p>The requested advertisment does not exist</p>
    <a href="index.html"><button class="button__element">Go to advertisments</button></a>
    `
}