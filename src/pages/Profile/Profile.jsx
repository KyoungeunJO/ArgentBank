import './Profile.css'
import { useState } from 'react'
import AccountCard from '../../components/AccountCard/AccountCard'
import useProfile from '../../services/useProfile'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../../Reducers/userSlice'
import { useLocation } from 'react-router-dom'

function Profile() {

    useProfile()
    const dispatch = useDispatch()

    const location = useLocation()
    const token = localStorage.getItem('token') || location?.state?.token || null

    const saveNameDB = (names) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(names)
        })
    }

    const saveName = () => {
        const firstName = document.querySelector("#firstName").value
        const lastName = document.querySelector("#lastName").value
        const names = {firstName, lastName}
        saveNameDB(names)
        dispatch(setProfile({type: "user", user: names}))
        toogle()
    }

    const [isOpened, setIsOpened] = useState(false)
    const toogle = () => setIsOpened(!isOpened)
    const user = useSelector(store => store.user)

    return (
        <div>
            <main className="main bg-dark">
                {isOpened ? 
                <div className="header">
                    <h1>Welcome back</h1>
                    <form className='editName'>
                        <input autoFocus type="text" id="firstName" className="gridAlignRight" name="firstName" required minLength="2" size="10" placeholder={user.firstName}/>
                        <input type="text" id="lastName" className="gridAlignLeft" name="lastName" required minLength="2" size="10" placeholder={user.lastName}/>
                        <button className='edit-button gridAlignRight' onClick={saveName}>Save</button>
                        <button className='edit-button gridAlignLeft' onClick={toogle}>Cancel</button>
                    </form>
                </div> : 
                <div className="header">
                    <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                    <button className="edit-button" onClick={toogle}>Edit Name</button>
                </div>}
                <h2 className="sr-only">Accounts</h2>
                <AccountCard />
            </main>
        </div>
    )
}

export default Profile