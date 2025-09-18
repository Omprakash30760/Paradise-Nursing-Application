import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] } // items: {id,name,price,img,desc,qty}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existing = state.items.find(i => i.id === product.id)
      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ ...product, qty: 1 })
      }
    },
    increaseQty(state, action) {
      const id = action.payload
      const it = state.items.find(i => i.id === id)
      if (it) it.qty += 1
    },
    decreaseQty(state, action) {
      const id = action.payload
      const it = state.items.find(i => i.id === id)
      if (it) it.qty = Math.max(1, it.qty - 1)
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
    setCart(state, action) {
      state.items = action.payload ?? []
    }
  }
})

export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart, setCart } = cartSlice.actions
export default cartSlice.reducer
