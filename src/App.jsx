import { useState } from 'react'

import { DessertProvider } from "/src/store/DessertProvider";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //for a file in the same directory
import './main.css' //for a file in the same directory
// import './components/dessert/dessertItem.css'

//import Items from './components/dessert/Items.jsx'
import DessertItem from '/src/components/dessert/DessertItem.jsx' //when the file path is absolute (here, must start with src)
import Cart from '/src/components/cart/Cart.jsx' //when the file path is absolute (here, must start with src)

// import data from './store/data.json'
import data from '/src/store/data.js'

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
        </section>        
      </DessertProvider>
    </>
  )
}

export default App
