import './emptyCart.css'
import emptyCartImage from 'https://productlistwithcartmainreact.vercel.app/src/assets/images/illustration-empty-cart.svg';

const EmptyCart = () => {
    return(
        <>
            <div id="cart_empty">
              <img src={emptyCartImage} className="empty_cart_image" alt="empty cart" />
              <p className="text_color_rose_500 font_weight_600 font_size_productnames">Your added items will appear here.</p>
            </div>
        </>
    );
}

export default EmptyCart;