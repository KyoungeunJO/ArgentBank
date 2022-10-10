import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { logIn } from '../../Reducers/userSlice'

function SignIn() {

    const nav = useNavigate()
    const dispatch = useDispatch()

    function handleCLick(event) {
        event.preventDefault()
        const email = document.querySelector('#username').value
        const pwd = document.querySelector('#password').value
        const payload = {email: email, password: pwd}

        fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(payload)
        })
        .then(result => result.json())
        .then(result => logUserToProfile(result))
    }

    function logUserToProfile(response) {
        const remember = document.querySelector('#remember-me')
        if (remember.checked) {
            localStorage.setItem('token', response.body.token)
        }
        // Updata store
        dispatch(logIn())

        nav('/profile', {state: {token: response.body.token}})
    }

    return(
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="fa fa-user-circle sign-in-icon" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>
                    <button className="sign-in-button" onClick={handleCLick}>Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default SignIn