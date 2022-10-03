import { AdDetailController } from "./AdDetailController.js";

import { NotificationController } from "../notifications/NotificationController.js";

//ad__detail
document.addEventListener('DOMContentLoaded', () => {
    const adDetailControllerElement = document.querySelector('.ad__detail__container');
    const notificationContainerElement = document.querySelector('.notification__container')

    //Obtenemos los parametros de la URL
    const params = new URLSearchParams(location.search);

    const adId = params.get('id');

    const adDetailController = new AdDetailController(adDetailControllerElement);
    const notificationController = new NotificationController(notificationContainerElement)
    adDetailController.drawAdDetail(adId);

    
});