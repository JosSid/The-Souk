import { SignupController } from "./SignupController.js";
import {NotificationController} from "../notifications/NotificationController.js"

//Registro de ususarios
document.addEventListener('DOMContentLoaded', () => {
    const createUserFormElement = document.querySelector('.register__user__form');
    const notificationElement = document.querySelector('.notification');

    const signupController = new SignupController(createUserFormElement);
    const notificationController = new NotificationController(notificationElement)
});