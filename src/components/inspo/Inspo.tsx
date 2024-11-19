import styles from './Inspo.module.css';
import { dummyInspoData } from "../../utils/placeholderData"
import { icons } from '../../imports/images';

const Inspo = () => {
    return (
        <>
            <div className={styles['main-inspo']}>
                <p> Your Next Inspo </p>
                <span> Checkout who’s wearing what by using #THREADEDInspo on Instagram </span>

                <div className={styles['inspo-container']}>
                    {dummyInspoData.map((item) => (
                        <>
                            <div className={styles['inspo-item']}>
                                <img src={item.imageSrc} alt={item.name} className={styles['item-image']} />
                            </div>
                        </>
                    ))}

                </div>

                <div className={styles['view-post']}>
                    <button>
                        VIEW ALL POST
                    </button>
                </div>

            </div>
            <div className={styles['exlusive-deals']}>
                <span>
                    SIGN UP FOR EXCLUSIVE DEALS AND UPDATES
                </span>

                <div className={styles['email-input']}>
                    <input type='text' placeholder='Your Email Address' />
                    <button>
                        <img src={icons.caretRight} alt='>' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Inspo