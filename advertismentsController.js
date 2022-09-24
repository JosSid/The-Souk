import { getAdvertisments } from './advertismentsList.js';
import { buildAdvertismentView } from './advertismentsView.js';

export async function advertismentsController(advertismentsControllerElement) {
  const advertismentsList = await getAdvertisments();
  for (const advertisment of advertismentsList) {
    const articleElement = document.createElement('article');

    articleElement.innerHTML = buildAdvertismentView(advertisment);

    advertismentsControllerElement.appendChild(articleElement);
  };
};
