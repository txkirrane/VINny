import { useNavigate } from "react-router-dom";
import { SearchForm } from "../components/forms/SearchForms";

export default function VINSearch(props){

    const navigate = useNavigate()

    return(
        <div className="container p-4 h-100">
            <div className="row h-100 row-cols-1 justify-content-center align-items-center">
                <div className="col d-flex flex-column gap-3">
                    <h1 className="mb-4 text-center">Enter a VIN #</h1>
                    <SearchForm placeholder="Enter a VIN #" handleSearch={(term) => navigate(`/vehicle/${term}`)} />
                    <p className="text-center text-muted">Built by Thomas Kirrane</p>
                </div>
            </div>
        </div>
    )
}