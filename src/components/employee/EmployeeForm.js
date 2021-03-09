import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0,
      manager: false,
      fullTime: false,
      hourlyRate: 0
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = event.target.value
      // update state
    //   newAnimal.locationId = +newAnimal.locationId
    //   newAnimal.customerId = +newAnimal.customerId
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      employee.locationId = +employee.locationId
      const locationId = parseInt(employee.locationId)

      if (locationId === 0) {
        window.alert("Please select a location")
      } else {
        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addEmployee(employee)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control">
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.address}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="manager">Manager? </label>
                  <input type="radio" id="manager" name="manager" value={employee.manager.isChecked} onChange={handleControlledInputChange} required autoFocus className="form-control"/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control">
                      <option value="0">Full Time?</option>
                      <option value={employee.fullTime}>True</option>
                      <option value={employee.fullTime} onChange={handleControlledInputChange} required autoFocus className="form-control">False</option>
                  </select>
                  {/* <input type="radio" id="fullTime" name="fullTime" value={employee.fullTime} onChange={handleControlledInputChange} required autoFocus className="form-control"/> */}
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Hourly Rate:</label>
                  <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="$" value={employee.hourlyRate}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}