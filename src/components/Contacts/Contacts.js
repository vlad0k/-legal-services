import React from 'react';
import cl from './Contacts.module.css';

function Contacts() {
  return (
    <div className={cl.contacts}>
      <h3 className={cl.contactsHeader}>Контакты</h3>
      <div className={cl.contactsElements}>
        <p>
          Email: <span>example@gmail.com</span>
        </p>
        <p className={cl.contactsMobile}>
          <a href='viber://chat?number=+380953408554'>
            <img className={cl.socialLogo} src='https://мессенджеры-скачать.рф/wp-content/uploads/2017/10/viber-LOGO.png'></img>
          </a>
          <a href="tg://resolve?domain=vlad0k_sha">
            <img className={cl.socialLogo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png'></img>
          </a>
          <span className={cl.mobileNum}>+38 (000) 000 00 00</span>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
