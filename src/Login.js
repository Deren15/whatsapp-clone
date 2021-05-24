import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'


function Login() {

    const signIn = () => {

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.ibb.co/NZC4G95/DB.png" alt="logo" />
                <div className="login__text">
                    <h1>Sign In Now!</h1>
                </div>

                <Button onClick={signIn}>Sign In with Google</Button>

            </div>
        </div>
    )
}

export default Login
