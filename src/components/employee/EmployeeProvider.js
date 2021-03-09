import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. A context stores a certain kind of data to be used in your application. Therefore, when you create a dta provider component in React you need to create a context. Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.
export const EmployeeContext = createContext()

// This component establishes what data can be used
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(response => response.json())
    }

        // You return a context provider which has the 'animals' state, 'getAnimals' function, anmd the 'addAnimal' function as keys. This allows any child elements to access them.
        return (
            <EmployeeContext.Provider value={{
                employees, getEmployees, addEmployee
            }}>
                {props.children}
            </EmployeeContext.Provider>
        )
}