import { Fragment } from "react"
import { IoCarSport, IoHelp } from "react-icons/io5"

export function LargeVehicleDetails(props){

    const vehicle = props.vehicle
    console.log(vehicle);

    return(
        <div className="card card-body h-100">
            {vehicle === undefined &&
                <div class="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary float-center" />
                </div>
            }
            {vehicle === null &&
                <div class="d-flex flex-column justify-content-center align-items-center text-danger">
                    <IoHelp size="10%"/>
                    <h2>No Results</h2>
                </div>
            }
            {vehicle && 
                <Fragment>
                    <div className="card-title">
                        <h3><IoCarSport /> {`${vehicle.ModelYear} ${vehicle.Make} ${vehicle.Model} ${vehicle.Trim}`}</h3>
                        <p className="fw-light">{`${vehicle.VIN}`}</p>
                    </div>
                    <div className="">
                        <h4 className="mb-2">Specifications</h4>
                        <div className="list-group">
                            {Object.entries(vehicle).map(([key, val], index) => {
                                if(val && val !== "" && val !== "Not Applicable" ){
                                    return(
                                        <a className="list-group-item list-group-item-action d-flex flex-column justify-content-between w-100">
                                            <h6 className="fw-semibold">{key}</h6>
                                            <h6 className="">{val}</h6>
                                        </a>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}