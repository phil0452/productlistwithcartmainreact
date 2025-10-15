import PropTypes from "prop-types";
import './modalCart.css'

function ModalCart({dessert}) {
    const { type, quantity, price, image, name } = dessert;
    const thumbnailImage = 'http://localhost:5173/src/' + image.thumbnail;
    const cost = quantity * price;

    return (
        <>
            <div className="checkout_Item">
                <div className="checkout_Item_Content item_flex">
                    <div>
                        <div>
                            <img src={thumbnailImage} className="checkout_Item_thumbnail" alt={name} />
                        </div>
                        <div className="move_left">
                            <h4 className="item_name text_color_rose_900 font_weight_600 truncate">{name}</h4>
                            <p>
                                <span className="item_qty text_color_red font_weight_600">{quantity}x</span>
                                <span className="item_price text_color_rose_300 font_weight_400"></span>
                            </p>
                        </div>
                    </div><p className="item_total font_weight_600 align_item_center">{`$${cost.toFixed(2)}`}</p>
                </div>
                <hr className="divider" />
            </div>
        </>
    );
}

export default ModalCart;

ModalCart.propTypes = {
  desert: PropTypes.object,
};