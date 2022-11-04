import { LocationsProp } from "../../Types";

export default function LocationDetail(locationsProp: LocationsProp) {
    return(
        <div>
            {locationsProp.location.map((location) =>
                {
                    return (
                        <li>{location}</li>
                    )
                }
            )}
        </div>
    )
}