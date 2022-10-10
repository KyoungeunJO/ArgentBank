import './Header.css'
import logo from "../../assets/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

function Header() {

    const user = useSelector(store => store.user)

    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.clear()
        dispatch(logOut())
    }

    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/' >
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!user.isLoggedIn ? 
                    <Link className="main-nav-item" to='/signin'>
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </Link>
                 : 
                    <>
                    <Link className="main-nav-item" to='/profile'>{user.firstName}</Link>

                    <Link className="main-nav-item" to='/' onClick={logOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Sign out
                    </Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header
