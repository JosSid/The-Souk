import { advertismentsList } from './advertismentsList.js';
import { buildAdvertismentView } from './advertismentsView.js';

export async function getElementAdvertisment() {
  const articleElement = document.createElement('article');
  articleElement.innerHTML = buildAdvertismentView(advertismentsList[0]);
  const sectionElement = document.getElementById('advertisments__container');

  sectionElement.appendChild(articleElement);
  return articleElement;
}

export const pepe = getElementAdvertisment();
