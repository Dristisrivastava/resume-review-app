import React from 'react'
import '../App.css'
function Navbar() {
  return (
    <>
    <nav>
        <h1>HireGenAI</h1>
        <div className="navitem">
            <button className="">Home</button>
            <button className="">Analyse</button>
            <button className="">Prepare</button>
            <button className="">contact us</button>
            <button className="getstarted">Get Started</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar