import PropTypes from "prop-types";
import { createContext, useContext, useState} from "react";

const DessertCart = createContext ({
    desserts: [],
    AddDessert: () => {},
    RemoveDessert: () => {}
});

function DessertProvider({children}) {
    const [dessertSelected, setDessertSelected] = useState([]);
    console.log(dessertSelected);

    const allItems = {
        desserts: dessertSelected,
        AddDessert: AddItem,
        RemoveDessert: RemoveItem,
        TakeAwayDessert: TakeAwayItem,
        setDessertSelected
    }

    function AddItem(item){
        // Handle both existing and no existing deserts
        if(item.name) {
            setDessertSelected((previousItem) => {
                //check for a dessert item already selected
                const existing = previousItem.find((i) => i.name == item.name);;

                if (existing) {
                    console.log("Existing Item:", item.name);
                    //update the quantity for a dessert item already selected
                    return previousItem.map((ds) => ds.name === item.name ? {...ds, quantity : ds.quantity + 1} : ds);
                }
                // Spread (return) the dessert already selected in the list and then spread 
                // the particular item (selected) and only update its quantity
                console.log("New Item:", item.name);
                return [...previousItem, { ...item, quantity: 1 }];
            });
        }
    }

    //take a quantity away from an item in the cart
    function RemoveItem(name) {
        setDessertSelected((previousItem) => previousItem.map((item) => item.name == name ? {...item, quantity: item.quantity - 1} : item)
            .filter((item) => item.quantity > 0)); //keep only items with quantity more than 0
    }

    //remove an item from the cart altogether
    function TakeAwayItem(name){
        setDessertSelected((previousItem) =>
        previousItem.filter((item) => name !== item.name))
    };
    return (
        <DessertCart.Provider value={allItems}>{children}</DessertCart.Provider>
    );
}

function usePost() {
  const context = useContext(DessertCart);
  return context;
}

export { DessertProvider, usePost };

DessertProvider.propTypes = {
  children: PropTypes.node,
};