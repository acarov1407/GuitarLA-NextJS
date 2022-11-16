import Nav from "./nav";
import styles from "../styles/index/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`${styles.footer__content} container`}>
            <Nav />
            <p className={styles.footer__copyright}>
                Todos los derechos reservados {new Date().getFullYear()}
            </p>
        </div>
    </footer>
  )
}

export default Footer