import { images } from "../../imports/images";
import styles from './Arrivals.module.css';

const Arrivals = () => {
  return (
    <>
      <div
        className={styles['main-arrival']}
        style={{ backgroundImage: `url(${images.arrivalBG})` }}
      >
        <div></div>

        <div>
          <span> NEW <br /> ARRIVALS</span>
          <p> Get ready for the holidays with us!</p>

          <button>
            SHOP NOW
          </button>
        </div>
      </div>
    </>

  )
}

export default Arrivals