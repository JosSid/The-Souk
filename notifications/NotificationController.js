//Controlador de notificaciones de la APP

import { buildNotificationView } from "./notificationsViews.js";
import { pubSub } from "./pubSub.js";

export class NotificationController {
    constructor(nodeElement){
        this.notificationElement = nodeElement;

        this.sendNotificationError()
    };

    showNotification(message) {
        this.notificationElement.innerHTML = buildNotificationView(message);

        // Vamos al DOM y hacemos selector al boton de cerrar notificaciones
        const closeButtonElement = this.notificationElement.querySelector('.button__close__notification');

        //Añadimos escuchador de eventos al boton
        closeButtonElement.addEventListener('click', () => {
            this.notificationElement.innerHTML = ''
        });
    };

    sendNotificationError() {
        pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
            this.showNotification(message)
        })
    }

}
