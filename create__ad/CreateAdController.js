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

        const createAdInputElements = Array.from(this.createAdElement.querySelectorAll('input'));

        createAdInputElements.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                const inputsValue = createAdInputElements.every(inputElement => inputElement.value);
                if(inputsValue){
                    createAdButton.removeAttribute('disabled')
                   }else{
                    createAdButton.setAttribute('disabled', '')
                   }
            })
        });

        createAdButton.addEventListener('click', () => {
            this.createAd();
            alert('Advertisment Created')
            window.location = '/'
        });
    };

    createAd() {
       
        const formData = new FormData(this.createAdElement);
        const statement = formData.get('statement');
        const name = formData.get('name');
        const photo = formData.get('photo');
        const description = formData.get('description');
        const price = formData.get('price');
        createApiAd(statement,name,photo,description,price);
    }
}