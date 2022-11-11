import styles from "./Footer.module.css"
import newzyLogo from "../../assets/newzylogo.png";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={styles.sectionSection1}>
                    <a href="#">
                        <img src={newzyLogo} alt="logo newzy" />
                    </a>
                    <ul className={styles.footerLi}>
                        <li>
                            <a href="#">Subscribe</a>
                        </li>
                        <li>
                            <a href="#">Contribute</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.sectionSection2}>
                    <ul className={styles.footerList}>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Complaints & corrections</a>
                        </li>
                        <li>
                            <a href="#">SecureDrop</a>
                        </li>
                        <li>
                            <a href="#">Work for us</a>
                        </li>
                        <br />
                        <br />
                        <li>
                            <a href="#">Privacy settings</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Cookie policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & conditions</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Advertise with us</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.sectionSection3}>
                    <ul className={styles.footerList}>
                        <li>
                            <a href="#">All topics</a>
                        </li>
                        <li>
                            <a href="#">All writers</a>
                        </li>
                        <li>
                            <a href="#">Digital newspaper archive</a>
                        </li>
                        <br />
                        <br />
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">YouTube</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Newsletters</a>
                        </li>
                        <br />
                        <br />
                        <li>
                            <a href="#">Search UK jobs</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;