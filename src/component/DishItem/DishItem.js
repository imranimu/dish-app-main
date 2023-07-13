import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './DishItem.css'

const DishItem = (props) => {
    const { dish_name, dish_description, dish_price } = props.product;
    // console.log(props);
    return (
        <div className="card text-center pt-2 pb-2" style={{ width: '18rem' }}>
            <div classNameName='dish-info'>
                <h5>{dish_name}</h5>
                <p>{dish_description}</p>
                <h5 classNameName='text-center'>${dish_price}</h5>
            </div>
            <div classNameName='btn'>
                <button onClick={() => props.handleAddToCart(props.product)} type="button" className="btn btn-primary">
                    <span classNameName="p-2">Add to Cart</span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default DishItem;