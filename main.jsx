import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// hydrate from localStorage (simple)
const saved = localStorage.getItem('paradise_cart')
if (saved) {
  try {
    const items = JSON.parse(saved)
    store.dispatch({ type: 'cart/setCart', payload: items })
  } catch (e) { /* ignore */ }
}

// subscribe to save
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('paradise_cart', JSON.stringify(state.cart.items))
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
