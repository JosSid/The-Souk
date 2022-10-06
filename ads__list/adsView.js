
/**
 * 
 * @param {*objeto de datos de anuncio} ad 
 * @returns HTML
 */
export const buildAdView = (ad) => {
    const adView = `
    <a class="ad__anchor" href="http://localhost:8080/adsDetail.html?id=${ad.id}">
        <h2 class="ad__statement">${ad.statement}</h2>
        <h2 class="ad__name">${ad.name}</h2>
        <h4 class="ad__username">User: ${ad.user.username}</h4>
        <div class="photo__frame">
            <img class="ad__photo" src="${ad.photo}" alt="${ad.name}">
        </div>
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
    <div class="spinner__container">
    <div class="spinner"><div>SEARCH</div><div>SEARCH</div></div>
    </div>
    `
}

export const buildEmptyAdsView = function(){
    return `
    <div class="empty__ads">
        <h2>we have no ads to show</h2>
        <img src="https://i.postimg.cc/3xwVFqDs/b7459526aeb0786638a2cf16951955b1.png" alt="empty">
    </div>
    `
}