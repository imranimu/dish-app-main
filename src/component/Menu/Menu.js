import React, { useEffect, useState } from 'react';
import './Menu.css';
import DishItem from '../DishItem/DishItem';
import Cart from '../Cart/Cart';

const Menu = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://smartrestaurantsolutions.com/mobileapi-test/Tigger.php?funId=81&rest_id=645`)
            .then(res => res.json())
            .then(data => setProducts(data.app[0].cuisine[0].category[1].dish));
    }, [])

    const handleAddToCart = (selectItem) => {
        const exists = cart.find(product => product.dish_id === selectItem.dish_id);
        if (!exists){
            const newCart = [...cart, selectItem];
            setCart(newCart); 
        }
        else{
            alert('Item already added');
        }
        // console.log(product);
        
    }

    const handleRemoveCart = (selectItem) => {
        const rest = cart.filter(product => product.dish_id !== selectItem.dish_id);
        setCart(rest);

    }


    return (
        <div className='menu-container'>
            <div className="item-container">
                {
                    products.map(product => <DishItem
                        key={product.dish_id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></DishItem>)
                }


            </div>
            <div className="cart-containers">
                <h5 className='text-center mt-3'>Shopping Cart</h5>

                <Cart
                    handleRemoveCart={handleRemoveCart}
                    cart={cart}
                ></Cart>


            </div>
        </div>
    );
};

export default Menu;
