import { IoArrowForward, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Home(props){

    const navigate = useNavigate()

    return(
        <div className="container d-flex flex-column h-100 justify-content-center align-items-center gap-2 text-center">
            <h1>Welcome to VINny!</h1>
            <p className="p-4">
                VINny is the best place to get detailed information on vehicles. It is easy to use, quick, and powerful. All you need is a VIN number!
            </p>
            <button className="btn btn-lg btn-primary align-middle" onClick={() => navigate("/vinsearch/")}>Go to VIN Lookup</button>
        </div>
    )
}