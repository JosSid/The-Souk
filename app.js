import { advertismentsList } from './advertismentsList.js';
import { buildAdvertismentView } from './advertismentsView.js';

export async function getElementAdvertisment(advertismentsList) {

  const sectionElement = document.getElementById('advertisments__container');

  for(const advertisment of advertismentsList){
    const articleElement = document.createElement('article');
    articleElement.innerHTML = buildAdvertismentView(advertisment);

  
    sectionElement.appendChild(articleElement);
    
  }

}


getElementAdvertisment(advertismentsList);