import {AdsController} from './ads__list/AdsController.js'
import { NotificationController } from './notifications/NotificationController.js';
import { decodeToken } from "./utils/decodeToken.js";
//Cuando el DOM este listo seleccionamos el nodo con el que vamos a trabajar
document.addEventListener('DOMContentLoaded', () => {
    const createController = (pageNumber) => {
        const sectionElement = document.getElementById('ads__container');
        const notificationElement = document.getElementById('ads__not__found');

        
        //Le pasamos el nodo seleccionado al controlador y ejecutamos la función
        const adsController = new AdsController(sectionElement,pageNumber);
        const notificationController = new NotificationController(notificationElement);
    };

    const prevButtonElement = document.querySelector('#prev');
    const nextButtonElement = document.querySelector('#next');

    
    const loginUserState = () => {
        const token = localStorage.getItem('token');

    
        const userAction = document.getElementById('link__create__ad')
        if(!token){
            userAction.innerHTML = `
            <img src="https://i.postimg.cc/8cGmX8JT/souk-logo.png" alt="souk-logo">
            <a href="/signup.html">
                <button Class="login__button">Login or Register</button>
            </a>
            `
        }else{
            const tokenData = decodeToken(token)
            userAction.innerHTML = `
            <img src="https://i.postimg.cc/8cGmX8JT/souk-logo.png" alt="souk-logo">
            <div class="welcome">
                <h3 class="title">Welcome ${tokenData.username}</h3>
                <a href="/createAd.html">
                    <button Class="login__button">Create Advertisment</button>
                </a>
            </div>
            `
        }
    }
 
    
    debugger;
    let pageNumber = 1

    createController(pageNumber)

    const getPageNumber = () => {
        
        
        debugger;

        prevButtonElement.addEventListener('click',  () => {
              pageNumber--  
              if(pageNumber === 1){
                prevButtonElement.classList.toggle('hide')
              }
             createController(pageNumber)
            
       })

       nextButtonElement.addEventListener('click', () => {
        pageNumber++
        if(pageNumber === 2){
            prevButtonElement.classList.toggle('hide')
            
        }
        debugger;
        createController(pageNumber)
        debugger;
      
        })

        
        return pageNumber
    }


    pageNumber = getPageNumber()
    
    debugger;
    loginUserState();
    debugger;
});


