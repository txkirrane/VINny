import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { SearchForm } from "../components/forms/SearchForms"
import { LargeVehicleDetails } from "../components/templates/VehicleTemplates"
import { useVINSearch } from "../data/hooks/SearchHooks"

export default function Vehicle (props){

    const {vin} = useParams()
    const navigate = useNavigate()

    const [vehicle] = useVINSearch({vin: vin})

    return(
        <div className="d-flex flex-column container p-4 gap-3">
            <div className="">
                <SearchForm placeholder="Enter a VIN #" intialSearchValue={vin} handleSearch={(term) => navigate(`/vehicle/${term}`)} />
            </div>
            <LargeVehicleDetails vehicle={vehicle} />
        </div>
    )
}