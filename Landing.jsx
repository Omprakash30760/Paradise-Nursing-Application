import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery — your neighborhood plant shop. We specialize in aromatic, medicinal, and decorative houseplants to brighten every home.
        </p>
        <Link to="/products" className="btn">Get Started</Link>
      </div>
    </section>
  )
}
