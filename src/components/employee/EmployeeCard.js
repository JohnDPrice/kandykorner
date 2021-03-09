import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="location__address">{location.address}</address>
        <p className="employee___manager">Manager: {employee.manager.toString()}</p>
        <p className="employee__fullTime">Full Time: {employee.fullTime.toString()}</p>
        <p className="employee__hourlyRate">Hourly Rate: {employee.hourlyRate}</p>
    </section>
)