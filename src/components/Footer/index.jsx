import styles from "./Footer.module.scss";
import langSVG from "../../assets/svg/lang.svg";
import vkSVG from "../../assets/svg/vk.svg";
import tgSVG from "../../assets/svg/tg.svg";
import whatsappSVG from "../../assets/svg/whatsapp.svg";
import classNames from "classnames";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.logo}>QPICK</span>
      <div className={styles.links_left}>
        <a className={styles.disabled} href="/">
          Избранное
        </a>
        <a href="/">Корзина</a>
        <a className={styles.disabled} href="/">
          Контакты
        </a>
      </div>
      <div className={styles.links_mid}>
        <a className={styles.disabled} href="/">
          Условия сервиса
        </a>
        <div className={styles.lang_container}>
          <img src={langSVG} alt="#" />
          <button className={classNames(styles.btn_lang, styles.active)}>
            Рус
          </button>
          <button className={styles.btn_lang}>Eng</button>
        </div>
      </div>
      <div className={styles.links_right}>
		<a href="https://vk.com/gleb_glebych" target="_blank">
			<img src={vkSVG} alt="#" />
		</a>
		<a href="https://t.me/lockydoggy" target="_blank">
			<img src={tgSVG} alt="#" />
		</a>
		<a href="vk.com" target="_blank">
			<img src={whatsappSVG} alt="#" />
		</a>
	  </div>
    </div>
  );
};

export default Footer;
