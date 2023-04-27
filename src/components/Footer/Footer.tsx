import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
    <div className="footer-wrapper">
        <div className="social-links">
            <a href="#"><img src="../../data/assets/icons/Instagram.svg" alt="inst" /></a>
            <a href="#"><img src="../../data/assets/icons/Discord.svg" alt="disc" /></a>
            <a href="#"><img src="../../data/assets/icons/Telegram.svg" alt="tg" /></a>
            <a href="#"><img src="../../data/assets/icons/YouTube.svg" alt="yt" /></a>
        </div>
        <div className="logo">
            <p>YAMANEKO</p>
        </div>
        <div className="copyright">
            <p>"YAMANEKO" — команда, занимающаяся переводом и озвучиванием зарубежной киноиндустрии на русский язык.</p>
            <p>В случае нарушения авторских прав - обращайтесь на почту: yamaneko.response@gmail.com</p>
            <p>&#169; 2020 - 2022 «YAMANEKO» Разработано Monashka & Dragomore & LueKedowsky</p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer