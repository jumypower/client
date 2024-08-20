import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(DataContext);
  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)
  return (
    <div>Total a pagar : ${total}</div>
  )
}

export default CartTotal