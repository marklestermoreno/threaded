import styles from './Trending.module.css';
import { dummyTrendingData, dummyTrendingHashtagData } from '../../utils/placeholderData';

const Trending = () => {
    return (
        <>
            <div className={styles['main-trending']}>
                <p> Now Trending </p>
                <span> See what everyone's wearing right now </span>


                <div className={styles['trending-container']}>
                    {dummyTrendingData.map((item) => (
                        <>
                            <div className={styles['trending-item']} key={item.key}>
                                <img src={item.imageSrc} alt={item.name} className={styles['item-image']} />
                                <p className={styles['item-description']}>{item.name}</p>
                            </div>
                        </>
                    ))}
                </div>

                <div className={styles["hashtags"]}>
                    {dummyTrendingHashtagData.map((item) => (
                        <button key={item.key}>
                            <span> {item.name} </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Trending