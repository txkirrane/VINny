import { useEffect, useState } from "react";
import axios from "axios"

const ExcludedFields = [
    'ErrorCode',
    'ErrorText',
    'AirBagLocSide',
    'AirBagLocFront',
    'AirBagLocCurtain',
    'AirBagLocKnee',
    'ManufacturerId',
    'ModelID',
    'SeatBeltsAll',
    'MakeID',
    'DisplacementCC',
    'DisplacementCI',
    'OtherRestraintSystemInfo'
]

export function useVINSearch({vin}){

    const [vehicle, setVehicle] = useState(undefined)

    function convertToVehicle(results){
        if(results.ErrorCode !== "0") return null
        ExcludedFields.forEach((e) => delete results[e])
        return(results)
    }

    useEffect(() => {
        setVehicle(undefined)
        axios({
            url: `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`,
            method: "GET"
        }).then((res) => {
            setVehicle(convertToVehicle(res.data.Results[0]))
        }).catch((err) => {

        })
    }, [, vin])

    return [vehicle]

}