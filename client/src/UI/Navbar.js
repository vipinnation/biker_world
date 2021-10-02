import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../Assets/CSS/navbar.css'
import navbarLogo from '../Assets/Images/kustomPartsLogo.png'

import EngineeringDropdown from '../Component/Utility/EngineeringDropdown'
import NCERTDropdown from '../Component/Utility/NCERTDropdown'
import HeroDropdown from '../Component/Utility/HeroDropdown'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [search, setSearch] = useState('')
    const [searchDesktop, setSearchDesktop] = useState()
    const history = useHistory()

    const searchSubmit = () => {
        history.push('/search/' + search)
    }
    const searchdesktopsubmit = () => {
        history.push('/search/' + searchDesktop)
    }

    return (
        <div>
            <header>
                <nav class="bg-gray-200 flex justify-between px-4 py-2 items-center cursor-pointer">
                    <div class="w-1/5 flex items-center">
                        <div class="m-desktop-none m-d-inline mx-1 text-lg">
                            <i class="fa fa-bars" aria-hidden="true" onClick={() => { setToggle(!toggle) }}></i>

                        </div>
                        <NavLink exact to='/'> <img src={navbarLogo} alt="Kustom Parts" srcset="" class="img-logo-size" /></NavLink>
                    </div>
                    <div class="m-d-none ">
                        <form onSubmit={searchdesktopsubmit}>
                            <input type="text" class="px-72 py-2 rounded  neomorp text-black outline-none"
                                placeholder="Search Your Product"
                                onChange={e => (setSearchDesktop(e.target.value))}
                                value={searchDesktop}
                            /><i class="fa fa-search -ml-8  " aria-hidden="true"></i>
                        </form>
                    </div>
                    <div class="flex">
                        <NavLink exact to='/login'> <h2 class="px-2 text-3xl"><i class="fa fa-user " aria-hidden="true"></i></h2> </NavLink>
                        <NavLink exact to='/cart'>  <h2 class="px-2 text-3xl"><i class="fa fa-shopping-cart " aria-hidden="true"></i></h2></NavLink>
                    </div>

                </nav>

                {
                    toggle && toggle == true ? (<div className='bg-gray-200 px-4 flex items-center mx-auto pb-1 m-desktop-none m-d-flex'>
                        <nav>
                            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 bg-gray-200">
                                <li>
                                    <NavLink className="inline-flex  w-full  hover:bg-red-200 rounded-full hover-transition  shadow-sm px-4 py-2  text-sm font-medium text-gray-700" exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="inline-flex  w-full  hover:bg-red-200 rounded-full hover-transition  shadow-sm px-4 py-2  text-sm font-medium text-gray-700"
                                        exact to="/about"
                                    >About</NavLink>
                                </li>
                                <li>
                                    <HeroDropdown />
                                </li>

                                <li>
                                    <NCERTDropdown />
                                </li>
                                <li>
                                    <EngineeringDropdown />
                                </li>



                            </ul>
                        </nav>
                    </div>) : null
                }

                <div class="bg-gray-200 px-4 flex items-center mx-auto pb-1 m-desktop-none m-d-flex">
                    <form className='neomorph' onSubmit={searchSubmit}>
                        <input type="text" class="rounded outline-none px-14 neomorp-search" placeholder="Search Your Product"
                            value={search}
                            onChange={e => (setSearch(e.target.value))}
                        />
                        <button type='submit'><i
                            class="fa fa-search -ml-8 " aria-hidden="true"></i></button>
                    </form>
                </div>


            </header>
        </div>
    )
}

export default Navbar
