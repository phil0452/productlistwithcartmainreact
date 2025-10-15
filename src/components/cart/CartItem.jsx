import PropTypes from "prop-types";
import { usePost } from "http://localhost:5173/src/store/DessertProvider";

import './cartItem.css'
import removeImage from "http://localhost:5173/src/assets/images/icon-remove-item.svg"

const CartItem = (dessert) => {
    const { TakeAwayDessert } = usePost();
    const { category, quantity, price, name } = dessert.dessertInfo;
    const cost = quantity * price;

    return(
        <>
            <div className="cart_item item_flex">
                <div className="item_content">
                    <h4 className="item_name text_color_rose_900 font_weight_600">{name}</h4>
                    <p>
                        <span className="item_qty text_color_red font_weight_600">{quantity}x</span>
                        <span className="move_left text_color_rose_300 font_weight_400">{`$${price.toFixed(2)}`}</span>
                        <span className="move_left item_total text_color_rose_300 font_weight_700">{`$${cost.toFixed(2)}`}</span>
                    </p>
                </div>
                
                <button className="remove_button" onClick={() => TakeAwayDessert(name)}><img src={removeImage} alt="remove" /></button>
            </div>
            <hr className="divider" />
        </>
    );
}

export default CartItem;

CartItem.propTypes = {
  desert: PropTypes.object,
};