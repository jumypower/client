import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

import 'bootstrap/dist/css/bootstrap.min.css';

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((item) => item.id === id)

        const newCart = cart.filter ((item)=>{
            return item !== foundId
        })

        setCart(newCart)
    }

    return cart.map((product) => {
        return (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td><CartItemCounter product={product} /></td>
                <td>${product.price * product.quanty}</td>
                <td onClick={() => deleteProduct(product.id)}>❌</td>
            </tr>
        )

    })
}

export default CartElements