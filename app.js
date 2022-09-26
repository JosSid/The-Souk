import {AdsController} from './advertismentsController.js'
//Cuando el DOM este listo seleccionamos el nodo con el que vamos a trabajar
document.addEventListener('DOMContentLoaded', () => {
    const sectionElement = document.getElementById('ads__container');
    //Le pasamos el nodo seleccionado al controlador y ejecutamos la función
    const adsController = new AdsController(sectionElement)
});


