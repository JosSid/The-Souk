import { getAdvertisments } from './advertismentsList.js';
import { buildAdvertismentView, buildSpinnerView , buildEmptyAdvertismentsView} from './advertismentsView.js';

/**
 * @param nodo que vamos a mutar mutar
 * @return instancia controlador de anuncios
 */
export class AdvertismentsController {
  constructor(nodeElement){
    this.advertismentsControllerElement = nodeElement;

    this.advertismentsController()
  };
  /**
 * controlador de anuncios
 * @param {elemento del nodo que vamos a mutar} advertismentsControllerElement 
 * @return nodo mutado
 */
  async advertismentsController() {
    this.advertismentsControllerElement.innerHTML = buildSpinnerView();
    //Cuando recibimos los datos los capturamos en una variable
    const advertismentsList = await getAdvertisments();
    //Si el array de anuncios no tiene anuncios que mostrar
    if(advertismentsList.length === 0) {
      const divElement = document.createElement('div');
      this.advertismentsControllerElement.appendChild(divElement);
      divElement.outerHTML = buildEmptyAdvertismentsView()
    }
    //Seleccionamos la clase .spinner y le añadimos la clase .hide para esconder la ruleta antes de enseñar los anuncios
    this.advertismentsControllerElement.querySelector('.spinner').classList.toggle('hide')
    //Por cada anuncio recibido creamos un elemento que anexaremos al nodo que vamos a mutar
    for (const advertisment of advertismentsList) {
      //creamos el elemento que necesitamos
      const articleElement = document.createElement('article');
      //Le añadimos el HTML al elemento creado
      articleElement.innerHTML = buildAdvertismentView(advertisment);
      //Lo anexamos al nodo padre
      this.advertismentsControllerElement.appendChild(articleElement);
    };
  };
};


