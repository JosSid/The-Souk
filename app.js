import {advertismentsController} from './advertismentsController.js'

document.addEventListener('DOMContentLoaded', () => {
    const sectionElement = document.getElementById('advertisments__container');

    advertismentsController(sectionElement)
});


