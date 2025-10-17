import { usePost } from "/src/store/DessertProvider";

import EmptyCart from './EmptyCart.jsx';
import FullCart from './FullCart.jsx';

const Cart = () => {    
    const { desserts } = usePost();

    const totalDesserts = desserts.reduce (
        (total, item) => total + item.quantity, 
        0 //starting with zero
    );

    return(
        <>
          <div className="cart_container">
            <h2 className="text_color_red">Your Cart (<span id="item_count">{totalDesserts}</span>)</h2>

            {totalDesserts == 0 && <EmptyCart /> }
            {totalDesserts > 0 && <FullCart /> }
            
            
            
            
          </div>
        </>
    );
}

export default Cart;