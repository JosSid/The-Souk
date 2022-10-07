import { adBodyView } from "../utils/adBodyView.js";

/**
 * 
 * @param {*objeto de datos de anuncio} ad 
 * @returns HTML
 */
export const buildAdView = (ad) => {
    const adView = `
    <a class="ad__anchor" href="http://localhost:8080/adsDetail.html?id=${ad.id}">
        ${adBodyView(ad)}
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
    <div class="spinner"><div>LOAD</div><div>LOAD</div></div>
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