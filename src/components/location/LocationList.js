import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
                locations.map(singleLocation => {
                    return <LocationCard key={singleLocation.id} location={singleLocation} />
                })
            }
        </div>
    )
}