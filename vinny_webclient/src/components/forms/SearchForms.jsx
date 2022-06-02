import { useEffect } from "react";
import { useState } from "react";

export function SearchForm(props){

    const [isValid, setIsValid] = useState(false)
    const [searchTerm, setSearchTerm] = useState((props.intialSearchValue !== undefined ? props.intialSearchValue : ""))

    useEffect(() => {
        setIsValid((props.regex ? searchTerm.match(props.regex) !== null : true))
    }, [searchTerm])

    return(
        <div className="card card-body">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    props.handleSearch(searchTerm)
                }}
                className="d-grid gap-2"
            >
                <input required type="text" placeholder={(props.placeholder ? props.placeholder : "")} className="form-control form-control-lg" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className={`btn btn-primary btn-lg`} disabled={!isValid} >Search</button>
            </form>
        </div>
    )
}