import { useState } from "react"

import {BsList, BsXLg} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar (props){

    const navigate = useNavigate()

    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid d-flex gap-1">
                <Link className="navbar-brand nav-link fs-4 fw-bold" to="/">VINny <span className="badge text-bg-warning rounded-pill">Alpha</span></Link>
                <ul className="navbar-nav d-flex flex-row gap-4 flex-grow-1">
                    <li className="nav-item"><Link className="nav-link" to="/vinsearch/">VIN Lookup</Link></li>
                    <div className="flex-grow-1" />
                    {/* <li className="nav-item"><Link className=" nav-link" to="/onboarding/">My Account</Link></li> */}
                </ul>
            </div>
        </nav>
    )
}