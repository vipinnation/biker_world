import React, { useState } from 'react'
import '../../CSS/Profile.css'
import { NavLink } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()

const AdminNavbar = () => {

    const logout = () => {
        cookie.remove('auth-token');
        cookie.remove('role')
        window.location.reload()
    }
    const [toggle, setToggle] = useState(false)

    return (
        <div className="sideNavbarWrapper">
            <span id="toggle-button"><i className="fa fa-bars mb-4" onClick={e => setToggle(!toggle)}></i></span>
            <div className="mx-auto sidenav" id='toggle'>
                <div>
                    <ul className="text-gray-500 text-sm font-medium ">

                        <NavLink exact to='/admin'>
                            <li className="mx-auto bg-gray-100  border border-green-800  hover:bg-green-200 p-4">
                                Dashboard
                            </li>
                        </NavLink>
                        <NavLink exact to='/admin/product'>
                            <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200  p-4">
                                Product
                            </li>
                        </NavLink>
                        <NavLink exact to='/admin/addProduct'>
                            <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                Add Products
                            </li>
                        </NavLink>
                        <NavLink exact to='/admin/verifyreview'>
                            <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                Verify Review
                            </li>
                        </NavLink>
                        <NavLink exact to='/admin/withdrawrequest'>
                            <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                Withdraw Request
                            </li>
                        </NavLink>



                        <NavLink exact to='/login' onClick={logout}>
                            <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200 p-4">
                                Logout
                            </li>

                        </NavLink>

                    </ul>
                </div>
            </div>

            {
                (toggle) ? (<div className="float-left transition" id="mobile">
                    <div>
                        <ul className="text-gray-500 text-sm font-medium mb-8  ">

                            <NavLink exact to='/admin'>
                                <li className="mx-auto bg-gray-100  border border-green-800  hover:bg-green-200 p-4 rounded">
                                    Dashboard
                                </li>
                            </NavLink>
                            <NavLink exact to='/admin/product'>
                                <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200  p-4">
                                    Product
                                </li>
                            </NavLink>
                            <NavLink exact to='/admin/addProduct'>
                                <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                    Add Products
                                </li>
                            </NavLink>
                            <NavLink exact to='/admin/verifyreview'>
                                <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                    Verify Review
                                </li>
                            </NavLink>
                            <NavLink exact to='/admin/withdrawrequest'>
                                <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                    Withdraw Request
                                </li>
                            </NavLink>


                            <NavLink exact to='/login' onClick={logout}>
                                <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200 p-4">
                                    Logout
                                </li>

                            </NavLink>


                        </ul>
                    </div>
                </div>) : null
            }


        </div>
    )
}

export default AdminNavbar
