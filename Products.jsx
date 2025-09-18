import React from 'react'
import products from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

export default function Products() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const inCartIds = new Set(cartItems.map(i => i.id))

  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="products-page">
      {categories.map(cat => (
        <section key={cat}>
          <h2>{cat}</h2>
          <div className="grid">
            {products.filter(p => p.category === cat).map(p => {
              const disabled = inCartIds.has(p.id)
              return (
                <article key={p.id} className="card">
                  <img src={p.img} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="price">${p.price.toFixed(2)}</div>
                  <button
                    onClick={() => dispatch(addToCart(p))}
                    disabled={disabled}
                    aria-disabled={disabled}
                  >
                    {disabled ? 'Added' : 'Add to Cart'}
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
