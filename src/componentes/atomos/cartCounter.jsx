import React from "react"
import { connect } from "react-redux"

const CartCounter = () => (
    <li>
        <button className="button tiny ghost">Carrito: 5</button>
    </li>
)

export default connect()(CartCounter) 