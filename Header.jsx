import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const items = useSelector(state => state.cart.items)
  const totalQty = items.reduce((s, i) => s + i.qty, 0)
  const loc = useLocation()

  return (
    <header className="site-header">
      <div className="brand">Paradise Nursery</div>

      <nav>
        {loc.pathname !== '/' && <Link to="/">Home</Link>}
        {loc.pathname !== '/products' && <Link to="/products">Products</Link>}
        {loc.pathname !== '/cart' && <Link to="/cart">Cart</Link>}
      </nav>

      <Link to="/cart" className="cart-link" aria-label="shopping cart">
        🛒 <span className="cart-count" aria-live="polite">{totalQty}</span>
      </Link>
    </header>
  )
}
