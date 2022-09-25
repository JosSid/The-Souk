import { getAdvertisments } from './advertismentsList.js';
import { buildAdvertismentView, buildSpinnerView } from './advertismentsView.js';
/**
 * controlador de anuncios
 * @param {elemento del nodo que vamos a mutar} advertismentsControllerElement 
 * @return nodo mutado
 */
export async function advertismentsController(advertismentsControllerElement) {
  advertismentsControllerElement.innerHTML = buildSpinnerView();
  //Cuando recibimos los datos los capturamos en una variable
  const advertismentsList = await getAdvertisments();
  //Seleccionamos la clase spinner para esconder la ruleta antes de enseñar los anuncios
  advertismentsControllerElement.querySelector('.spinner').classList.toggle('hide')
  //Por cada anuncio recibido creamos un elemento que anexaremos al nodo que vamos a mutar
  for (const advertisment of advertismentsList) {
    //creamos el elemento que necesitamos
    const articleElement = document.createElement('article');
    //Le añadimos el HTML al elemento creado
    articleElement.innerHTML = buildAdvertismentView(advertisment);
    //Lo anexamos al nodo padre
    advertismentsControllerElement.appendChild(articleElement);
  };
};
