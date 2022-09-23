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