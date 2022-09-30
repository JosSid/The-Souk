/**
 * 
 * @param {*} message 
 * @returns HTML notificaciones
 */
export const buildNotificationView = (message) => {
    return `
      <p>${message}</p>
      <button class="button__close__notification">Close</button>
    `;
  }