import { useEffect, useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setProfile, logIn } from "../Reducers/userSlice";

function useProfile() {

    const location = useLocation()
    const token = localStorage.getItem('token') || location?.state?.token || null
    const dispatch = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        if (!token) { nav('/') }

        if (token) {
            fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            .then(result => {
                if (result.status !== 200) {
                    nav('/signin')
                } else {
                    return result.json()
                }
            })
            .then(result => {
                batch(() => {
                    dispatch(setProfile({type: "user", user: result.body}))
                    dispatch(logIn())
                })
            })
    }   
   }, [])

}

export default useProfile