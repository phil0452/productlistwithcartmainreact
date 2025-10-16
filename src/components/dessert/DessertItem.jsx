import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "/src/store/DessertProvider";

import './dessertItem.css'
import { useMediaQuery } from './useMediaQuery';

const DessertItem = (DessertItem) => {
  const item = DessertItem.dessertInfo;    
    const addToCartImage = './src/assets/images/icon-add-to-cart.svg';
    const decrementImage = './src/assets/images/icon-decrement-quantity.svg';
    const incrementImage = './src/assets/images/icon-increment-quantity.svg';
    const [AddToCart, setAddtoCart] = useState(false);
   // const { desserts , AddDessert, RemoveDessert } = usePost();
    const {desserts,AddDessert,RemoveDessert} = usePost();
    const { name, category, price, image } = item;

    const desktopImage = image.desktop;
    const tabletImage = image.tablet;
    const mobileImage = image.mobile;
    const thumbnailImage = image.thumbnail;
    const isLargeScreen = useMediaQuery('(min-width: 720px)');
    const isTablet = useMediaQuery('(min-width: 475px) and (max-width: 720px)');
    const isMobile = useMediaQuery('(max-width: 470px)');

    const currentItem =  desserts.find((d) => d.name == name);
    const quantity = currentItem ? currentItem.quantity : 0;

     const addToCartClasses = [
        (!AddToCart ? "active" : "inactive") // Green if active, red otherwise
    ].filter(Boolean) // Remove falsy values
    .join(" "); // Join classes into a single string

  const ImageClasses = [
    AddToCart && "selected"
  ]
    .filter(Boolean) // Remove falsy values
    .join(" "); // Join classes into a single string

    function AddItem(item) {
      AddDessert(item);
    }

     // updating status
  useEffect(() => {
    if (quantity === 0) {
      setAddtoCart(false); // reset back to "Add to Cart"
    } else {
      setAddtoCart(true); // show quantity controls
    }
  }, [quantity]); //this useeffect only runs when a desserts qty changes

    return(
        <>
            <div className="dessert_item">
                {isLargeScreen && <img className={"dessert_image " + ImageClasses} src={desktopImage} alt="Waffle with Berries" data-thumbnail-img={thumbnailImage} />}
                {isTablet && <img className={"dessert_image " + ImageClasses} src={tabletImage} alt="Waffle with Berries" data-thumbnail-img={thumbnailImage} />}
                {isMobile && <img className={"dessert_image " + ImageClasses} src={mobileImage} alt="Waffle with Berries" data-thumbnail-img={thumbnailImage} />}
                <div className={"button add_to_cart_button bg_color_white text_color_rose_900 font_weight_600 " + addToCartClasses} onClick={() => AddItem(DessertItem.dessertInfo)}
                data-product-name="Waffle with Berries">
                    <img src={addToCartImage} alt="add to cart" />
                    <span>Add to Cart</span>
                </div>
                
                {AddToCart && (<div className="button qty_container bg_color_red text_color_white font_weight_600 item_flex"
                data-product-name="Waffle with Berries">
                    <button className="qty_button qty_subtract_button bg_color_red" onClick={() => RemoveDessert(name)}>
                        <img src={decrementImage} />
                    </button>
                    <span className="item_qty" data-product-name="Waffle with Berries">{quantity}</span>
                    <button className="qty_button qty_add_button bg_color_red" onClick={() => AddItem(DessertItem.dessertInfo)}>                    
                        <img src={incrementImage} />
                    </button>
                </div>)}
                
                <div className="item_info">
                    <p className="text_color_rose_300 font_weight_400">{category}</p>
                    <p className="text_color_rose_900 font_weight_600">{name}</p>
                    <p className="text_color_red font_weight_600">{`$${price.toFixed(2)}`}</p>
                </div>
            </div>
        </>
    );
}

export default DessertItem;

DessertItem.propTypes = {
  DessertItem: PropTypes.array,

};







