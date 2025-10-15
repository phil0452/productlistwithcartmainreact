import { useState } from 'react'

import { DessertProvider } from "./store/DessertProvider";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main.css'
// import './components/dessert/dessertItem.css'

//import Items from './components/dessert/Items.jsx'
import DessertItem from './components/dessert/DessertItem.jsx'
import Cart from './components/cart/Cart.jsx'

import data from './store/data.json'

function App() {
  const dessert = [];
  return (
    <>
    {/*<>
       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    </>*/}
      <DessertProvider value={dessert}>
        <section id="main" className="flex">
          <div className="items_container">
            <h1 className="text_color_rose_900">Desserts</h1>

            <div id="desset_menu" className="flex">            
              {data.map((dessert) => <DessertItem dessertInfo={dessert} /> )}
            </div>
          </div>

          <Cart />
          {/* <div id="confirm_order_modal" className="modal hidden">
            <form id="confirm_order_form">
              <img src="./assets/images/icon-order-confirmed.svg" alt="icon order confirmed" />
              <h1>Order Confirmed</h1>
              <p className="text_color_rose_500 font_size_productnames">We hope you enjoy you food!</p>

              <div  className="cart_items bg_color_rose_50">        
                <div id="cartitems">
                </div>
                <div id="order_total_container" className="order_total item_flex">
                  <span className="font_weight_400 order_total_span">Order Total</span>
                  <span id="checkout_total" className="font_weight_700"></span>
                </div>
              </div>

              <button id="confirm_order" className="qty_container bg_color_red text_color_white font_weight_600">Start New Order</button>
            </form>
          </div> */}
        </section>        
      </DessertProvider>
    </>
  )
}

export default App
