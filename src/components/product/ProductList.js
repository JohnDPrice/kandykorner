import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"
import { useHistory } from "react-router-dom"

export const ProductList = () => {
  const { products, getProducts, searchTerms } = useContext(ProductContext)

  // Since you are no longer ALWAYS displaying all of the products
  const [ filteredProducts, setFiltered ] = useState([])
  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getProducts()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching products
      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all products
      setFiltered(products)
    }
  }, [searchTerms, products])

  return (
    <>
      <h1>Products</h1>

      <button onClick={() => history.push("/products/create")}>
          Make Reservation
      </button>
      <div className="products">
      {
        filteredProducts.map(product => {
          return <ProductCard key={product.id} product={product} />
        })
      }
      </div>
    </>
  )
}