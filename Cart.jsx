import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeFromCart } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const items = useSelector(state => state.cart.items)
  const totalQty = items.reduce((s, i) => s + i.qty, 0)
  const totalCost = items.reduce((s, i) => s + i.qty * i.price, 0)
  const dispatch = useDispatch()

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p>Total items: <strong>{totalQty}</strong></p>
      <p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>

      <div className="cart-items">
        {items.length === 0 && (
          <div>
            Your cart is empty. <Link to="/products">Continue shopping</Link>
          </div>
        )}
        {items.map(item => (
          <div key={item.id} className="cart-row">
            <img src={item.img} alt={item.name} />
            <div className="meta">
              <h3>{item.name}</h3>
              <div>Unit: ${item.price.toFixed(2)}</div>
              <div>Subtotal: ${(item.price * item.qty).toFixed(2)}</div>
            </div>
            <div className="controls">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <Link to="/products" className="btn">Continue Shopping</Link>
        <button className="btn primary" onClick={() => alert('Checkout — Coming Soon!')} disabled={items.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  )
}
