import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

// we will use the store like the useSelector


const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items)

  const Dispatch = useDispatch()
  const handleClick = (CartItems) => {
    Dispatch(clearCart(CartItems))
  }

  
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl"> Cart </h1>
      <div className=" w-6/12 m-auto">
        <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={() => handleClick(CartItems)}>Clear Cart</button>
        {CartItems.length == 0 ? <h1 className="font-bold text-xl mt-4">You Have Nothing In Your Cart !! Please Add Something 👨‍🍳 </h1> :
          <ItemList items={CartItems} />}
        
      </div>
    </div>
  )
}

export default Cart
