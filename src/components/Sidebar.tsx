import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";
import Avatar from "./Avatar";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="./imgs/cover.png" />

      <div className={styles.profile}>
        <Avatar src="./imgs/tux.png" />

        <strong>Helton Muniz</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
