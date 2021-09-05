import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {Cookies} from 'react-cookie'
const cookie = new Cookies()


const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <div>
            <Route
                {...rest}
                render={(props) =>
                    cookie.get('auth-token')  ? (<Component {...props} />) : (<Redirect to='/login' />)}
            />
        </div>
    )
}

export default PrivateRoute
