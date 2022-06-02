import { useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginForm, SignupForm } from "../components/forms/OnboardingForms";

export const OnboardingViews = {
    LOGIN: 0,
    SIGNUP: 1,
    FORGOT: 2
}

export default function Onboarding (props){
    return(
        <div className="container p-4 h-100 justify-content-center">
            {[<LoginForm />, <SignupForm />, <></>][(props.currentView !== undefined ? props.currentView : 0)]}
        </div>
    )
}