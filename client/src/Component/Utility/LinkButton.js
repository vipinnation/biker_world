import React from 'react'
import { NavLink } from 'react-router-dom'
const LinkButton = () => {
    return (
        <div>
            <div>

                <div className='grid grid-cols-5 cols3   list-none w-3/5 mx-auto m-ml-8'>
                    <div className="my-2">
                        <NavLink exact to='/category/motul engine oil' className='btn btn-primary px-2 rounded py-1'>Motul</NavLink>
                    </div>
                    <div className="my-2 ">
                        <NavLink exact to='/category/castrol engine oil' className='btn btn-primary px-2 rounded py-1'>Castrol</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to='/category/helmet' className='btn btn-primary   px-2 rounded py-1'>Helmet</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to='/category/chain clean' className='btn btn-primary px-1 rounded py-1'>Chain Clean</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to='/category/chain lube' className='btn btn-primary px-2 rounded py-1'>Chain Lube</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to='/category/horn' className='btn btn-primary px-2 rounded py-1'>Horn</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to='/category/passion pro' className='btn btn-primary px-1 rounded py-1'>Passion Pro</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to="/category/mastero edge" className='btn btn-primary px-2 rounded py-1'>Maestro</NavLink>
                    </div>
                    <div className="my-2">
                        <NavLink exact to="/allproduct" className='btn btn-primary px-2 rounded py-1'>Products</NavLink>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default LinkButton
