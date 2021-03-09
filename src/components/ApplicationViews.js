import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { ProductSearch } from "./product/ProductSearch"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductSearch />
                    <ProductList />
                </Route>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}