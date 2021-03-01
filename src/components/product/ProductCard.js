import React from "react"
import "./Product.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product___name">{product.name}</h3>
        <p className="product__type">Type: {product.productType.type}</p>
    </section>
)