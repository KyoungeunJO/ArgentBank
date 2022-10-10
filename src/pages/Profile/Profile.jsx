import './Profile.css'
import { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import AccountCard from '../../components/AccountCard/AccountCard'
import useProfile from '../../services/useProfile'

function Profile() {

    useProfile()

    const editName = () => console.log("edit Name");

    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={editName}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountCard />
                </main>
        </div>
    )
}

export default Profile