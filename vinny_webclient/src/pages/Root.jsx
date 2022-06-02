import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";

export default function Root(props){
    return(
        <div className="d-flex flex-column h-100">
            <NavBar>
            </NavBar>
            <div className="overflow-auto flex-grow-1">
                <Outlet />
            </div>
        </div>
    )
}