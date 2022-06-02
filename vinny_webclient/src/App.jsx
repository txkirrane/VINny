import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm, SignupForm } from "./components/forms/OnboardingForms";
import VINSearch from "./pages/VINSearch";
import Onboarding from "./pages/Onboarding";
import Root from "./pages/Root";
import Vehicle from "./pages/Vehicle";
import Home from "./pages/Home";

export default function App (props){
    return(
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="" element={<Home />} />
                {/* <Route path="onboarding/">
                    <Route path="signin" element={<Onboarding currentView={0} />} />
                    <Route path="signup" element={<Onboarding currentView={1} />} />
                    <Route path="*" element={<Navigate to="/onboarding/signin/" replace />} />
                    <Route path="" element={<Navigate to="/onboarding/signin/" replace />} />
                </Route> */}
                <Route path="vinsearch">
                    <Route path="" element={<VINSearch />}/>
                </Route>
                <Route path="vehicle/:vin" element={<Vehicle />}>
                </Route>
            </Route>
        </Routes>
    )
}