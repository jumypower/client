import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(DataContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item.id === product.id)

    if (productRepeat.quanty > 1) {
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)))
    }
  }

  return (
    <>
      <FaMinus style={{ fontSize: '12px' }} onClick={decrease} />
      <span className="mx-3">{product.quanty}</span>
      <FaPlus style={{ fontSize: '12px' }} onClick={() => buyProducts(product)} />
    </>
  )
}

export default CartItemCounter