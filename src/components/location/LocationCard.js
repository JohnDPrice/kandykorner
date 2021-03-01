import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__address">Address: {location.address}</h3>
        <p className="location__handicap">Handicap Accessible: {location.handicapAccessible.toString()}</p>
        <p className="location__squareFoot">Square Foot: {location.squareFoot}</p>
    </section>
)

