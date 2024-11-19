import { images } from '../../imports/images';
import { dummyContactUSData, dummyPaymentData } from '../../utils/placeholderData';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles['footer-column']}>
                    <ul className={styles.noBullets}>
                        <li><b> COMPANY INFO </b></li>
                        <li> About THREADED</li>
                        <li> Affilliate </li>
                        <li> Blog </li>
                        <li> Careers </li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <ul className={styles.noBullets}>
                        <li><b> HELP & SUPPORT</b></li>
                        <li> FAQ </li>
                        <li> Shipping </li>
                        <li> Returns </li>
                        <li> How To Order </li>
                        <li> How To Track </li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <ul className={styles.noBullets}>
                        <li><b> CUSTOMER CARE</b></li>
                        <li> Contact Us </li>
                        <li> Payment Methods </li>
                    </ul>
                </div>
                <div className={styles['footer-expand']}>

                    <b> FOLLOW US</b>

                    <div className={styles['contact-us']}>
                        {dummyContactUSData.map((item) => (
                            <>
                                <img src={item.imageSrc} alt="contact-us" className={styles['icons']} />
                            </>
                        ))}
                    </div>

                    <div className={styles.payments}>
                        <b> WE ACCEPT </b>

                        <div className={styles['contact-us']}>
                            {dummyPaymentData.map((item) => (
                                <>
                                    <img src={item.imageSrc} alt="contact-us" className={styles['payment-icon']} />
                                </>
                            ))}
                        </div>

                    </div>
                </div>

            </footer>
            <div className={styles.copyrights}>
                <span> ©2021 THREADED All Rights Reserved.</span>
                <img className={styles.logo} src={images.logo} alt='threaded-logo' loading='lazy' />

            </div>

        </>
    )
}

export default Footer