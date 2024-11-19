import styles from './ShoppingCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../state/shoppingActions';
import { ShoppingCartState } from '../../interfaces/IShoppingCart';
import toast from "react-hot-toast"
import { useMemo } from 'react';


const ShoppingCart = () => {

  const dispatch = useDispatch();
  const items = useSelector((state: ShoppingCartState) => state.items);

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
    toast.success("Added Successfully");

  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
    toast.success("Removed Successfully");
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
    toast.success("Deleted Successfully");
  };

  const TotalPrice = (pPrice: number | null, origPrice: number, quantity: number): number => {

    let price = 0;

    if (pPrice === null) {
      price = origPrice
    }

    else {
      price = pPrice
    }

    return price * quantity;
  };

  const SubtotalPrice = () => {
    const items = useSelector((state: ShoppingCartState) => state.items);

    const totalPrice = useMemo(() => {
      return items.reduce((accumulator, item) => {
        const itemPrice = item.price ?? item.origPrice;  
        return accumulator + (item.quantity * itemPrice);
      }, 0);
    }, [items]); 

    const formattedTotalPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(totalPrice);

    return formattedTotalPrice;
  };

  return (
    <>
      <div className={styles['main-shopping']}>
        <div className={styles['main-shopping-header']}>
          <div>
            <span> <b> Shoppinng Bag (2) </b></span>
            <span> Need help? +1-562-926-5672</span>
          </div>
          <div>
            <span> <u> Sign in</u>  to sync your bag across your devices </span>
            <span> <u> Let's Chat </u></span>
          </div>
        </div>
        <div className={styles['main-shopping-content']}>
          <div className={styles['shopping-item']}>
            <div className={styles['shopping-title']}>
              <span> <b> Item </b></span>
              <span> <b> Price </b></span>
            </div>

            <hr />

            {items.map((item) => (
              <>
                <div className={styles['shopping-description']}>
                  {/* Product Image */}
                  <div className={styles['item-image']}>
                    <img src={item.imageSrc} alt={item.imageSrc} className={styles['image']} />
                  </div>

                  {/* Product Details */}
                  <div className={styles['item-details']}>
                    <h3 className={styles['item-name']}> {item.name}</h3>
                    <p className={styles['item-style']}>Style No: <span className={styles['style-number']}> {item.styleNo}</span></p>
                    <p className={styles['item-style']}>
                      Price:
                      <span className={styles['style-number']}>
                        ${item.price === null ? item.origPrice.toFixed(2) : item.price.toFixed(2)}
                      </span>
                    </p>
                    {item.price !== null && (
                      <p className={styles['item-style']}><span className={styles['style-number']}>
                        <p className={styles['orig-price']}><span className={styles['original-price']}>${item.origPrice}</span></p>
                      </span>
                      </p>
                    )}
                  </div>

                  {/* Pricing and Quantity Control */}
                  <div className={styles['item-pricing']}>
                    <p className={styles['item-price']}><span className={styles['discounted-price']}>${TotalPrice(item.price, item.origPrice, item.quantity).toFixed(2)}</span></p>

                    {/* Quantity Control */}
                    <div className={styles['quantity-control']}>
                      <button className={styles['decrement']} onClick={() => handleDecrement(item.id)}>-</button>
                      <input
                        type="number"
                        className={styles['quantity-input']}
                        value={item.quantity}
                        readOnly
                      />
                      <button className={styles['increment']} onClick={() => handleIncrement(item.id)}>+</button>
                    </div>

                    {/* Action Buttons */}
                    <button className={styles['remove-from-cart']} onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className={styles['shopping-summary']}>

            <p>
              Order Summary
            </p>

            <div className={styles['order-summary']}>

              <div>
                <span>  Sub Total {items.length} </span>
                <span>  {SubtotalPrice()} </span>
              </div>

              <div>
                <span>  Free Shipping! <u> details</u></span>
                <span>  $0.00</span>
              </div>

              <hr />

              <div>
                <span> <b> Estimated Total</b></span>
                <span> <b> {(SubtotalPrice())} </b> </span>
              </div>

              <p>
                Vat Included
              </p>
            </div>

            <button>
              CHECKOUT AS A GUEST
            </button>

            <button>
              SIGN IN FOR FASTER CHECKOUT
            </button>


          </div>
        </div>
      </div >
    </>
  )
}

export default ShoppingCart