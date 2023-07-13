import React, { useState } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Card = ({ cart, handleRemoveCart }) => {
    const [count, setCount] = useState(0);
    // console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + Number.parseInt( product.dish_price)
    }

    const navigate = useNavigate();
    const showOrderReviews = () => {
        navigate ('/orderreview');
    }



    return (
        <section className='cart-section'>
            <div>
            <p className='text-right d-flex justify-content-end'>Selected Items: {cart.length}</p>
                <div>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {
                                cart.map(cart =>
                                    <tr>
                                        <td>{cart.dish_name}</td>
                                        <td><FontAwesomeIcon onClick={() => setCount(count-1)} icon={faMinus} />
                                            <input className='input-field' type='text' placeholder={count} />
                                            <FontAwesomeIcon onClick={() => setCount(count+1)}  icon={faPlus} /></td>
                                        <td>${cart.dish_price}</td>
                                        <td><FontAwesomeIcon onClick={() => handleRemoveCart(cart)} icon={faTrash} /></td>
                                    </tr>
                                )}
                        </tbody>

                    </table>
                </div>
                <div className='text-right d-flex justify-content-end mt-3'>
                    <h6 className='text-right'>Total Price: $ {total}</h6>
                </div>
                <div className=" d-flex justify-content-center m-3">
                    <button onClick={showOrderReviews} type="button" className="btn btn-outline-primary w-50">Order Review</button>
                </div>
            </div>
        </section>


    );
};

export default Card;