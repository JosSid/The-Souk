
/**
 * 
 * @param {*objeto de datos de anuncio} advertisment 
 * @returns HTML
 */
export const buildAdvertismentView = (advertisment) => {
    const advertismentView = `
    <h2 class="advertisment__statement">${advertisment.statement}</h2>
    <h2 class="advertisment__name">${advertisment.name}</h2>
    <img class="advertisment__photo" src="${advertisment.photo}" alt="${advertisment.name}">
    <h3 class="advertisment__description">${advertisment.description}</h3>
    <h2 class="advertisment__price">${advertisment.price}</h2>
    `
    return advertismentView
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

export const buildEmptyAdvertismentsView = function(){
    return `
    <h2>we have no advertisments to show</h2>
    `
}