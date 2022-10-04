import { createApiAd } from "./createAdList.js";

export class CreateAdController {

    constructor(nodeElement) {
        this.createAdElement = nodeElement;

        this.subscribeToEvents();
    }

    subscribeToEvents() {
        const createAdButton = this.createAdElement.querySelector('.create__ad__button');

        this.createAdElement.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        createAdButton.addEventListener('click', () => {
            this.createAd();
            alert('Advertisment created')
            window.location = '/'
        });
    };

    createAd() {
        const urlPhoto = 'https://i.postimg.cc/d0zTBD4z/souk-logo.png'
        const formData = new FormData(this.createAdElement);
        const statement = formData.get('statement');
        const name = formData.get('name');
        const photo = formData.get('photo');
        const description = formData.get('description');
        const price = formData.get('price');
        createApiAd(statement,name,photo,description,price);
    }
}