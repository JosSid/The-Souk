import { NotificationController } from "../notifications/NotificationController.js";
import { pubSub } from "../notifications/pubSub.js";

import {CreateAdController} from "./CreateAdController.js"

document.addEventListener('DOMContentLoaded', () => {

    const checkToken = () => {
        const token = localStorage.getItem('token')

        if(!token) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'To create an advertirment, you must first log in')
            
            setTimeout(() => {
                window.location = "/signup.html"
            },5000)
        }
    }

    const notificationContainerElement = document.querySelector('.notification__container');

    const notificationController = new NotificationController(notificationContainerElement);

    const createAdElement = document.querySelector('#create__ad__form')

    const createAdController = new CreateAdController(createAdElement)
   
    checkToken();
});