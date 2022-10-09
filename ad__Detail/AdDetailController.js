import { getAdsById , removeAdById} from "./adDetailList.js";
import {pubSub} from "../notifications/PubSub.js"
import { buildAdById, buildEmptyDetailAd } from "./adDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { buildSpinnerView } from "../ads__list/adsView.js";

/**
 * @param nodo
 * @param advertismentID
 * @return advertismentDetail
 */
export class AdDetailController {
    constructor(nodeElement){
        this.adDetailElement = nodeElement;

    }

    async drawAdDetail(adId) {

        this.showSpinnerView()
        let adResponse;
        
        try {
            adResponse = await getAdsById(adId);
            this.ad = adResponse
            this.hideSpinnerView()
            this.adDetailElement.innerHTML = buildAdById(adResponse);
            this.drawDeleteButton(adResponse.userId);
            

        }catch(err) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'The requested advertisment does not exist');
        };

        if(adResponse === undefined){
            this.hideSpinnerView()
            this.adResponseEmpty();
        };

        
    };

    adResponseEmpty(){
        this.adDetailElement.innerHTML = buildEmptyDetailAd()
        setTimeout(() => {
            location.replace('http://localhost:8080/index.html')
        }, 5000);
    };

    drawDeleteButton() {
        //El usuario ha hecho login
        const token = localStorage.getItem('token');

        if(token){
            const tokenData = decodeToken(token);
            

            if(tokenData.userId === this.ad.userId) {
                
                const deleteButtonElement = document.createElement('div');
                const updateButtonElement = document.createElement('div')
                deleteButtonElement.innerHTML = '<button class="button__element delete__button">Delete Advertisment</button>';
                updateButtonElement.innerHTML = '<button class="button__element">Update Adverstisment</button>'
                this.adDetailElement.appendChild(deleteButtonElement);
                this.adDetailElement.appendChild(updateButtonElement)

                deleteButtonElement.addEventListener('click', () => {
                    this.removeAd()
                });

                updateButtonElement.addEventListener('click', () => {
                    Object.entries(this.ad).forEach(([key,value]) => {
                        localStorage.setItem(key,value)
                    })
                    
                    window.location = '/update.html'
                })
                
                
            };
        };      
        
    };

    async removeAd() {
        const confirm = window.confirm('Sure you want to delete the advertisment?')

        if(confirm) {
            try{
                await  removeAdById(this.ad.id)
                alert('Advertisment deleted')
                window.location = '/'
            }catch(err) {
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error deleting advertisment')
            }

        }
    }

    showSpinnerView(){
        this.adDetailElement.innerHTML = buildSpinnerView();
      };

    hideSpinnerView(){
        this.adDetailElement.querySelector('.spinner').classList.toggle('hide')
      }

};