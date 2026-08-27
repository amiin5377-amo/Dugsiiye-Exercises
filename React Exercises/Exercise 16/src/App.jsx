import { useState } from 'react'
import CartContext from './CartContext'
import ProductItem from './ProductItem'
import CartSummary from './CartSummary'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addItems = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeItems = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const value = { cartItems, removeItems, addItems }

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Smart-Watch" price="40$" />
      <ProductItem itemId={2} itemName="TV" price="400$" />
      <ProductItem itemId={3} itemName="Tablet" price="150$" />
      <ProductItem itemId={4} itemName="Apple-Watch" price="400$" />
      <ProductItem itemId={5} itemName="Earphone" price="45$" />
      <CartSummary />
    </CartContext.Provider>
  )
}

export default App
