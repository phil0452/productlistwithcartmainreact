import { usePost } from "http://localhost:5173/src/store/DessertProvider";
import { useState } from "react";

import CartItem from './CartItem.jsx'
import ModalCart from "./ModalCart";

import './fullCart.css';
import carbonNeutralImage from "http://localhost:5173/src/assets/images/icon-carbon-neutral.svg";
import orderConfirmedImage from "http://localhost:5173/src/assets/images/icon-order-confirmed.svg";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

const FullCart = () => {
    const {desserts, setDessertSelected} = usePost();
    const [showModal, setShowModal] = useState(false);

    const totalCost = desserts.reduce (
        (total, item) => total + item.quantity * item.price, 
        0 //starting with zero
    );

    const handleConfirm = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const modalPopup = [
        (!showModal ? "hidden" : "visible")
    ].filter(Boolean) // Remove falsy values
    .join(" "); // Join classes into a single string
     
    const handleNewCart = () => {
        setDessertSelected([]);
    };
    
    return(
        <>
            <div id="cart" className="cart">       
                {desserts.map((dessert) => <CartItem dessertInfo={dessert} />)}
            </div>
            <div id="cart_total_container" className="order_total item_flex">
              <span className="font_weight_400 order_total_span">Order Total</span>
              <span id="cart_total" className="font_weight_700">{`${totalCost.toFixed(2)}`}</span>
            </div>
            <div id="delivery_message">
              <p><img src={carbonNeutralImage} className="carbon_neutral_image" alt="carbon neutral" /> 
                This is a <strong className="font_weight_600">carbon neutral</strong> delivery
                </p>
              
                <button id="confirm_order" className="qty_container bg_color_red text_color_white font_weight_600" onClick={handleConfirm}>Confirm Order</button>
            </div>

            {/* modal */}
            <div id="confirm_order_modal" className={"modal " + modalPopup}  onClick={handleCancel}>
                <form id="confirm_order_form">
                    <img src={orderConfirmedImage} alt="icon order confirmed" />
                    <h1>Order Confirmed</h1>
                    <p class="text_color_rose_500 font_size_productnames">We hope you enjoy you food!</p>

                    <div  className="cart_items bg_color_rose_50">        
                    <div id="cartitems">
                        {desserts.map((dessert) => (
                                <ModalCart dessert={dessert} />
                            ))}
                    </div>
                    <div id="order_total_container" className="order_total item_flex">
                        <span className="font_weight_400 order_total_span">Order Total</span>
                        <span id="checkout_total" className="font_weight_700">{`${totalCost.toFixed(2)}`}</span>
                    </div>
                    </div>

                    <button id="confirm_order" className="qty_container bg_color_red text_color_white font_weight_600" onClick={handleNewCart}>Start New Order</button>
                </form>
            </div>
        </>
    );
}

export default FullCart;