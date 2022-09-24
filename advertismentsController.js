import { advertismentsList } from './advertismentsList.js';
import { buildAdvertismentView } from './advertismentsView.js';

export function advertismentsController(advertismentsControllerElement) {
  for (const advertisment of advertismentsList) {
    const articleElement = document.createElement('article');

    articleElement.innerHTML = buildAdvertismentView(advertisment);

    advertismentsControllerElement.appendChild(articleElement);
  };
};
