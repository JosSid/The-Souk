
/**
 * 
 * @param {*objeto de datos de anuncio} ad 
 * @returns HTML
 */
export const buildAdView = (ad) => {
    const adView = `
    <a href="http://localhost:8080/adsDetail.html?id=${ad.id}">
    <h2 class="ad__statement">${ad.statement}</h2>
    <h2 class="ad__name">${ad.name}</h2>
    <h4 class="ad__username">User: ${ad.user.username}</h4>
    <img class="ad__photo" src="${ad.photo}" alt="${ad.name}">
    <h3 class="ad__description">Description: ${ad.description}</h3>
    <h2 class="ad__price">Price: ${ad.price}</h2>
   </a> 
    `
    return adView
};
/**
 * HTML de ruleta de carga
 * @returns HTML spinner
 */
export const buildSpinnerView = function(){
    return `
    <div class="spinner"><div>SEARCH</div><div>SEARCH</div></div>
    `
}

export const buildEmptyAdsView = function(){
    return `
    <h2>we have no ads to show</h2>
    `
}