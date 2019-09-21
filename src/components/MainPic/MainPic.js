import React from 'react';
import cl from './MainPic.module.css';

import Contacts from '../Contacts/Contacts.js';

function MainPic() {
  return (
    <div>
      <div className={cl.MainPic}>
        <img src='pic.jpg' />
        <div class={cl.textBlock}>
          <h3 class={cl.head}>
            Адвокатское объединение Леша и Леша
          </h3>
          <p class={cl.par}>
            Лучшие адвокаты по всей украине!
          </p>

          <div>
            <button className={cl.askButton}>Задать вопрос</button>
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  );
}

export default MainPic;
