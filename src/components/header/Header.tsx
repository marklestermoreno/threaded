import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { images, icons } from '../../imports/images';
import styles from './Header.module.css';
import CartDropdown from '../cartDropdown/CartDropdown';
import { useSelector } from 'react-redux';
import { ShoppingCartState } from '../../interfaces/IShoppingCart';
import Tooltip from '../_global/Tooltip';


const Header = () => {

    const items = useSelector((state: ShoppingCartState) => state.items);

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/'); // Navigate to /product/1
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    // Close dropdown (if clicked outside)
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <main className={styles.header}>
                <div className={styles.categories}>
                    <span className='font-bold'>
                        Women
                    </span>
                    <span>
                        Plus
                    </span>
                    <span>
                        Men
                    </span>
                    <span>
                        Accessories
                    </span>
                </div>
                <div className={styles['logo-container']}>
                    <img className={styles.logo} onClick={navigateHome}
                        src={images.logo} alt='threaded-logo' loading='lazy' />
                </div>
                <div className={styles.actions}>

                    {/* -- User -- */}
                    <span>
                        <Tooltip text='User'>
                            <img className={styles.icons}
                                src={icons.user}
                                alt="user"
                                loading='lazy' />
                        </Tooltip>
                    </span>


                    {/* -- Shopping Cart -- */}
                    <span>
                        <Tooltip text='Cart'>
                            <img className={styles.icons}
                                src={icons.shoppingBag}
                                onClick={toggleDropdown}
                                alt="shopping-bag"
                                loading='lazy' />
                        </Tooltip>
                    </span>

                    {/* Shopping Cart Dropdown */}
                    <CartDropdown
                        isOpen={isDropdownOpen}
                        cartItems={items}
                        closeDropdown={closeDropdown}
                    />

                    {/* -- Favorites -- */}
                    <span>
                        <Tooltip text='Favorites'>
                            <img className={styles.icons}
                                src={icons.heart}
                                alt="favorites"
                                loading='lazy' />
                        </Tooltip>
                    </span>

                    {/* -- Favorites -- */}
                    <span>
                        <Tooltip text='Support'>
                            <img className={styles.icons}
                                src={icons.support}
                                alt="headphones"
                                loading='lazy' />
                        </Tooltip>
                    </span>

                    {/* -- Search -- */}
                    <span>
                        <Tooltip text='Search'>
                            <img className={styles.icons}
                                data-for="customTooltip"
                                src={icons.search}
                                alt="search"
                                loading='lazy' />
                        </Tooltip>
                    </span>


                    {/* -- USD -- */}

                    {/* <button className='currency-btn'>
                        <img className="icons"
                            src={icons.USFlag}
                            alt="currency"
                            loading='lazy' />
                        <span>
                            USD $
                        </span>
                    </button> */}

                </div>
            </main>
            <section>

                {/* -- Exclusive Deals -- */}
                <span>
                    <img className={styles.icons}
                        src={icons.exclusiveDeals}
                        alt="exclusive-deals"
                        loading='lazy' />
                    <p className='font-light'>
                        Exclusive Deals for VIP 2 and up!
                    </p>
                </span>

                {/* -- Weekly New Arrivals -- */}
                <span>
                    <img className={styles.icons}
                        src={icons.star}
                        alt="star"
                        loading='lazy' />
                    <p className='font-light'>
                        Weekly New Arrivals
                    </p>
                </span>

                {/* -- Free Shipping on Orders Over $100 -- */}
                <span>
                    <img className={styles.icons}
                        src={icons.truckDelivery}
                        alt="truck-delivery"
                        loading='lazy' />
                    <p className='font-light'>
                        Free Shipping on Orders Over $100
                    </p>
                </span>

                {/* -- Track Your Order -- */}
                <span>
                    <img className={styles.icons}
                        src={icons.map}
                        alt="pin"
                        loading='lazy' />
                    <p className='font-light'>
                        Track Your Order
                    </p>
                </span>

                {/* -- 10% Off On Your First Order -- */}
                <span>
                    <img className={styles.icons}
                        src={icons.purchaseTag}
                        alt="tag"
                        loading='lazy' />
                    <p className='font-light'>
                        10% Off On Your First Order!
                    </p>
                </span>

            </section>
        </>
    )
}

export default Header