import Image from "next/image";
import styles from "./aside.module.css";

import logo from './logo.png';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src="./logo.png" alt="Logo da code Connect" /> */}
      <Image src={logo} alt="Logo da code Connect" />
    </aside>
  );
};

export default Aside;
