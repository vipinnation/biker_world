import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import {Cookies} from 'react-cookie' 

const cookie = new Cookies()
const AdminRoute = ({ component: Component, ...rest }) => {


    return (
        <div>
            <Route
                {...rest}
                render={(props) =>
                   cookie.get('auth-token') && cookie.get('role') ? (<Component {...props} />) : (<Redirect to='/login' />)}
            />
        </div>
    )
}

export default AdminRoute
