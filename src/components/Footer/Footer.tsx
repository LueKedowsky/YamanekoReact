import { FC } from 'react';
import './Footer.scss';
import instagramIcon from 'src/assets/icons/Instagram.svg';
import discordIcon from 'src/assets/icons/Discord.svg';
import telegramIcon from 'src/assets/icons/Telegram.svg';
import youtubeIcon from 'src/assets/icons/YouTube.svg';

const Footer: FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-social">
        <a className="footer-container-social__link" href="https://google.com">
          <img src={instagramIcon} alt="inst" />
        </a>
        <a className="footer-container-social__link" href="https://google.com">
          <img src={discordIcon} alt="disc" />
        </a>
        <a className="footer-container-social__link" href="https://google.com">
          <img src={telegramIcon} alt="tg" />
        </a>
        <a className="footer-container-social__link" href="https://google.com">
          <img src={youtubeIcon} alt="yt" />
        </a>
      </div>
      <div className="footer-container-logo">
        <p className="footer-container-logo__text">YAMANEKO</p>
      </div>
      <div className="footer-container-copyright">
        <p className="footer-container-copyright__text">
          &quot;YAMANEKO&quot; — команда, занимающаяся переводом и озвучиванием
          зарубежной киноиндустрии на русский язык.
        </p>
        <p className="footer-container-copyright__text">
          В случае нарушения авторских прав - обращайтесь на почту:
          yamaneko.response@gmail.com
        </p>
        <p className="footer-container-copyright__text">
          &#169; 2020 - 2023 «YAMANEKO» (WIP) Разработано Monashka & Dragomore &
          LueKedowsky
        </p>
      </div>
    </footer>
  );
};

export default Footer;
