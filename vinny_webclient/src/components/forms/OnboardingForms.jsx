import { useState } from "react"
import { useNavigate } from "react-router-dom"

function OnboardingCard(props){

    const navigate = useNavigate()

    return(
        <div className="card card-body gap-2">
            <div className="row justify-content-between">
                <div className="col col-auto">
                    <h3 className="card-title">{props.header}</h3>
                </div>
                <div className="col col-auto">
                    <button className="btn btn-link btn-sm" onClick={() => navigate(props.changeViewLink)}>{props.changeViewMessage}</button>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // TODO: Implement frontend validation

    return(
        <OnboardingCard
            header="Sign In"
            changeViewMessage="Don't have an account?"
            changeViewLink="/onboarding/signup/"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    props.handleSignIn({username: username, password: password})
                }}
            >
                <div className="d-grid gap-2">
                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                </div>
            </form>
        </OnboardingCard>
    )
}

export function SignupForm(){

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (key, value) => {

        // TODO: Place frontend validation here...

        setCredentials({
            ...credentials,
            [key]: value
        })
    }

    return(
        <OnboardingCard
            header="Sign Up"
            changeViewMessage="Already have an account?"
            changeViewLink="/onboarding/signin/"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    props.handleSignUp(credentials)
                }}
            >
                <div className="d-grid gap-2">
                    <input type="text" placeholder="Username" className="form-control" value={credentials.username} onChange={(e) => handleChange('username', e.target.value)} />
                    <input type="email" placeholder="Email" className="form-control" value={credentials.email} onChange={(e) => handleChange('email', e.target.value)} />
                    <input type="password" placeholder="Password" className="form-control mb-2" value={credentials.password} onChange={(e) => handleChange('password', e.target.value)} />
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        </OnboardingCard>
    )
}