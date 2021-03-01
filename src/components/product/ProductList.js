import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(singleProduct => {
                    return <ProductCard key={singleProduct.id} product={singleProduct}/>
                })
            }
        </div>
    )
}