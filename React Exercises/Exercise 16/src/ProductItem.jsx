import CartContext from "./CartContext"
import { useContext } from "react"

function ProductItem({ itemId, itemName, price }) {
  const { addItems } = useContext(CartContext)

  const handleAdd = () => {
    addItems({
      id: itemId,
      name: itemName,
      price: Number.parseFloat(price) || 0,
    })
  }

  return (
    <>
      <h2>{itemName}</h2>
      <p>{price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </>
  )
}

export default ProductItem