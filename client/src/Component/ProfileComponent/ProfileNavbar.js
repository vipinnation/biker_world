import React, { useState } from 'react'
import '../../CSS/Profile.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookie = new Cookies();

const ProfileNavbar = () => {

    const [toggle, setToggle] = useState(false)

    const logout = e => {

        const auth = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.get('/api/logout', auth).then(res => {
            console.log("Logout Successfully")
        }).catch(err => {
            console.log(err)
        })

        cookie.remove('auth-token')
        window.location.reload()
    }
    return (
        <div>
            <div className="sideNavbarWrapper">
                <span id="toggle-button"><i className="fa fa-bars mb-4" onClick={e => setToggle(!toggle)}></i></span>
                <div className="mx-auto sidenav" id='toggle'>
                    <div>
                        <ul className="text-gray-500 text-sm font-medium ">

                            <NavLink exact to='/profile'>
                                <li className="mx-auto bg-gray-100  border border-green-800  hover:bg-green-200 p-4">
                                    Dashboard
                                </li>
                            </NavLink>
                            <NavLink exact to='/profile/refer-earn'>
                                <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200  p-4">
                                    Refer And Earn
                                </li>
                            </NavLink>
                            <NavLink exact to='/profile/refer-manage'>
                                <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                    Referral Earning
                                </li>
                            </NavLink>

                            <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4" onClick={logout}>
                                Logout
                            </li>

                        </ul>
                    </div>
                </div>

                {
                    (toggle) ? (<div className="float-left transition" id="mobile">
                        <div>
                            <ul className="text-gray-500 text-sm font-medium mb-8  ">


                                <NavLink exact to='/profile'>
                                    <li className="mx-auto bg-gray-100  border border-green-800  hover:bg-green-200 p-4">
                                        Dashboard
                                    </li>
                                </NavLink>
                                <NavLink exact to='/profile/refer-earn'>
                                    <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200  p-4">
                                        Refer And Earn
                                    </li>
                                </NavLink>
                                <NavLink exact to='/profile/refer-manage'>
                                    <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                        Referral Earning
                                    </li>
                                </NavLink>
                                <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4" onClick={logout}>
                                    Logout
                                </li>

                            </ul>
                        </div>
                    </div>) : null
                }


            </div>
        </div>
    )
}

export default ProfileNavbar
