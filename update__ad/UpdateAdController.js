import { updateApiAd } from "./updateAdList.js";

export class UpdateAdController {

    constructor(nodeElement) {
        this.updateAdElement = nodeElement;

        this.subscribeToEvents()

    }

    subscribeToEvents() {
        const updateAdButton = this.updateAdElement.querySelector('.create__ad__button');

        this.updateAdElement.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        const updateAdInputElements = Array.from(this.updateAdElement.querySelectorAll('.input__case'));

        updateAdInputElements.forEach(inputElement => {

            inputElement.value = localStorage.getItem(inputElement.name)
            
        });

        updateAdButton.addEventListener('click', () => {
            
            this.updateAd();
            
            alert('Advertisment Updated');
            const adId = localStorage.getItem('id');
            window.location = `/adsDetail.html?id=${adId}`;
            
        });
    };

    updateAd() {
       
        const formData = new FormData(this.updateAdElement);
        const adId = localStorage.getItem('id');
        const statement = formData.get('statement');
        const name = formData.get('name');
        const photo = formData.get('photo');
        const description = formData.get('description');
        const price = formData.get('price');
        
        updateApiAd(adId,statement,name,photo,description,price);

    };
};