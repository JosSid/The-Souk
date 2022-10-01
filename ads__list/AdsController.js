import { pubSub } from '../notifications/pubSub.js';
import { getAds } from './adsList.js';
import { buildAdView, buildSpinnerView , buildEmptyAdsView} from './adsView.js';

/**
 * @param nodo que vamos a mutar mutar
 * @return instancia controlador de anuncios
 */
export class AdsController {
  constructor(nodeElement){
    this.adsControllerElement = nodeElement;

    this.adsController()
  };
  /**
 * controlador de anuncios
 * @param {elemento del nodo que vamos a mutar} adsControllerElement 
 * @return nodo mutado
 */
  async adsController() {
    //Mostramos la ruleta de carga
    this.showSpinnerView();
    //Cuando recibimos los datos los capturamos en una variable
    let adsList = [];
    
    try {
      adsList = await getAds();
    }catch(err){
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error loading advertisments')
    }
    //Si el array de anuncios no tiene anuncios que mostrar
    if(adsList.length === 0) {
      this.showEmptyAdsView()
    }
    //Seleccionamos la clase .spinner y le añadimos la clase .hide para esconder la ruleta antes de enseñar los anuncios
    this.hideSpinnerView()
    //Por cada anuncio recibido creamos un elemento que anexaremos al nodo que vamos a mutar
    this.showFullAdsView(adsList)
  };

  showEmptyAdsView(){
    const divElement = document.createElement('div');
    this.adsControllerElement.appendChild(divElement);
    divElement.outerHTML = buildEmptyAdsView()
  };

  showFullAdsView(adsList){
    for (const ad of adsList) {
      //creamos el elemento que necesitamos
      const articleElement = document.createElement('article');
      //Le añadimos el HTML al elemento creado
      articleElement.innerHTML = buildAdView(ad);
      //Lo anexamos al nodo padre
      this.adsControllerElement.appendChild(articleElement);
    };
  };
  
  showSpinnerView(){
    this.adsControllerElement.innerHTML = buildSpinnerView();
  };

  hideSpinnerView(){
    this.adsControllerElement.querySelector('.spinner').classList.toggle('hide')
  }
};


