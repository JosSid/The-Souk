import { getAdsById } from "./adDetailList.js";
import {pubSub} from "../notifications/PubSub.js"
import { buildAdById, buildEmptyDetailAd } from "./adDetailView.js";

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
        let adResponse;

        try {
            adResponse = await getAdsById(adId);
            this.adDetailElement.innerHTML = buildAdById(adResponse)
            

        }catch(err) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'The requested advertisment does not exist')
        };

        if(adResponse === undefined){
            this.adResponseEmpty()
        }
    };

    adResponseEmpty(){
        this.adDetailElement.innerHTML = buildEmptyDetailAd()
        setTimeout(() => {
            location.replace('http://localhost:8080/index.html')
        }, 5000)
    }
};