import { NotificationController } from "../notifications/NotificationController.js";
import { pubSub } from "../notifications/pubSub.js";

import {UpdateAdController} from "./UpdateAdController.js"

document.addEventListener('DOMContentLoaded', () => {

    const checkToken = () => {
        const token = localStorage.getItem('token')

        if(!token) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'To update an advertirment, you must first log in')
            
            setTimeout(() => {
                window.location = "/signup.html"
            },5000)
        }
    }

    const notificationContainerElement = document.querySelector('.notification__container');

    const notificationController = new NotificationController(notificationContainerElement);

    const updateAdElement = document.querySelector('#create__ad__form')

    const updateAdController = new UpdateAdController(updateAdElement)
   
    checkToken();
});