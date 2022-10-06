/**
 * 
 * @param {*} message 
 * @returns HTML notificaciones
 */
export const buildNotificationView = (message) => {
    return `
      <h2>${message}</h2>
      <button class="login__button button__close__notification">Close</button>
    `;
  }