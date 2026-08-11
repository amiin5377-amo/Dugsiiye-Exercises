import {useState} from "react";
function Shoppingcart() {
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) => (
       product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) => (
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };
  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        min="1" 
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul> 
       {products.map((product) => (
          <li key={product.id}>
          <strong>{product.name} - ${product.price.toFixed(2)} -</strong>
          Quantity: 
          <button onClick = {()=>increaseQuantity(product.id)}>+</button>
          {product.quantity}
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <button onClick={() => removeProduct(product.id)}> Remove</button>
          </li>
         
        ))}
      
      </ul>
      <h4>total price: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}
export default Shoppingcart;