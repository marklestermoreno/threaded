import { images } from "../../imports/images";
import styles from './Home.module.css';

const Home = () => {

    return (
        <>

            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${images.Hero})` }}
            />

            {/* ------------ Site Wide Deals ----------- */}

            <div className={styles['main-site-wide-deals']}>

                <div className={styles['site-wide-deals']}>
                    <p>
                        <span className={styles['percentage-off']} > $5
                            <span> OFF</span>
                        </span>
                        <span className={styles['percentage-condition']}>
                            ON ORDER ABOVE $50
                        </span>
                    </p>
                </div>

                <div className={styles['site-wide-deals']}>
                    <p>
                        <span className={styles['percentage-off']} > $15
                            <span> OFF</span>
                        </span>
                        <span className={styles['percentage-condition']}>
                            ON ORDER ABOVE $75
                        </span>
                    </p>
                </div>

                <div className={styles['site-wide-deals']}>
                    <p>
                        <span className={styles['percentage-off']} > $20
                            <span> OFF</span>
                        </span>
                        <span className={styles['percentage-condition']}>
                            ON ORDER ABOVE $150
                        </span>
                    </p>
                </div>

                <div className={styles['site-wide-deals']}>
                    <p>
                        <span className={styles['percentage-off']} > $30
                            <span> OFF</span>
                        </span>
                        <span className={styles['percentage-condition']}>
                            ON ORDER ABOVE $200
                        </span>
                    </p>
                </div>

                <button>
                    CHECK OUT ALL SITE-WIDE DEALS
                </button>
            </div>

            {/* ------------ Black Friday Premium ----------- */}

            <div
                className={styles.premiums}
                style={{ backgroundImage: `url(${images.bg})` }}
            >
                <span className={styles['premiums-title']}>
                    BLACK FRIDAY EXCLUSIVE
                </span>

                <span>
                    FREE SHIPPING ON ALL ORDERS FOR VIP 2 AND UP!
                </span>

                <button>
                    SHOP NOW
                </button>
            </div>
        </>

    )
}
export default Home;