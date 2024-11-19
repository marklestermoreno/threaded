import styles from './RecentlyBought.module.css';
import { dummyRecenltyBoughtData } from "../../utils/placeholderData"
import { DollarFormatter } from '../../utils/baseFunctions';
import { useDispatch } from 'react-redux';
import { addItem } from '../../state/shoppingActions';
import toast from "react-hot-toast"
import { IItem } from '../../interfaces/IItem';



const RecentlyBought = () => {

    const dispatch = useDispatch();

    // Action to handle adding an item
    const handleAddItem = (item: IItem) => {
        dispatch(addItem({ ...item, quantity: 1 }));
        toast.success("Added to Cart");

    };

    return (
        <>
            <div className={styles['main-recently-bought']}>
                <p> Recently Bought </p>

                <div className={styles['recently-bought-container']}>
                    {dummyRecenltyBoughtData.map((item) => (
                        <>
                            <div className={styles['recently-bought-item']}>
                                <img src={item.imageSrc} alt={item.name} className={styles['item-image']} />
                                <p className={styles['item-description']}>{item.name}</p>
                                <div className={styles['prices']}>
                                    {item.price !== null && (
                                        <span className={styles['discounted-price']}>{DollarFormatter(item.price)}</span>
                                    )}

                                    {item.price !== null ?
                                        <span className={styles['discounted']}>{DollarFormatter(item.origPrice)}</span>
                                        :
                                        <span className={styles['original-price']}> {DollarFormatter(item.origPrice)} </span>
                                    }
                                </div>

                                <div className={styles['add-to-cart']}>
                                    <button onClick={() => handleAddItem(item)}>
                                        <p className={styles['item-description']}>
                                            Add
                                        </p>
                                    </button>
                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecentlyBought