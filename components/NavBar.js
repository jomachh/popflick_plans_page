import styles from "../styles/components/NavBar.module.sass";
import Image from "next/image";
import logoGold from "../public/assets/logo-gold.png";
import menu from "../public/assets/menu.svg";
import magnify from "../public/assets/magnify.svg";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Image
        className="touchable"
        src={menu}
        alt="menu"
        width={25}
        height={25}
      />

      <Image
        className="touchable"
        src={logoGold}
        alt="Logo Gold"
        width={128}
        height={38}
      />

      <Image
        className="touchable"
        src={magnify}
        alt="menu"
        width={25}
        height={25}
      />
    </div>
  );
};
