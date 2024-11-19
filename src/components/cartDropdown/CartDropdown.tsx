// src/ShoppingCartDropdown.tsx

import React from 'react';
import styles from './CartDropdown.module.css';
import { IItem } from '../../interfaces/IItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartState } from '../../interfaces/IShoppingCart';



interface ShoppingCartDropdownProps {
  isOpen: boolean;
  cartItems: IItem[];
  closeDropdown: () => void;
}

const CartDropdown: React.FC<ShoppingCartDropdownProps> = ({ isOpen, cartItems, closeDropdown }) => {

  const items = useSelector((state: ShoppingCartState) => state.items);

  const navigate = useNavigate();

  const NavigateToCart = () => {
    navigate("/Cart/" + Math.floor(Math.random() * 90000) + 10000);
  }


  return (
    <>
      {isOpen && (
        <div className={styles['dropdown']} onClick={closeDropdown}>
          <p> Cart ({items.length})</p>
          <hr />
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <li key={item.id} className={styles['cart-item']}>
                  <img src={item.imageSrc} alt={item.name} className={styles['item-image']} />
                  <div className={styles['item-details']}>
                    <h3 className={styles['item-name']}>{item.name}</h3>
                    <p className={styles['item-style']}>
                      <span className={styles['style-number']}>{item.styleNo}</span>
                    </p>
                    <p className={styles['item-style']}>
                      <span className={styles['style-number']}>${item.price?.toFixed(2) ?? item.origPrice.toFixed(2)}</span>
                    </p>
                    <p className={styles['item-style']}>
                      <span className={styles['style-number']}>{item.quantity}</span>
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <div className={styles['cart-empty']}>Your cart is empty!</div>
            )}
          </ul>
          <hr />
          <button onClick={NavigateToCart}>
            CHECKOUT
          </button>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
