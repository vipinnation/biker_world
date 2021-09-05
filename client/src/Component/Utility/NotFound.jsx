import React from 'react'
import { useHistory } from 'react-router'

const NotFound = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack();
    }
    return (
        <div className="bg-gray-100 ">

            <div className=' pb-24 text-center'>
                <span className='text-xxl'>404</span>
                <h1 className='text-l font-bold'>Page Not Found</h1>
                <p>The Page You are looking for might not exist or removed </p>
                <button className="btn outline-none bg-green-300 p-4 px-8 my-4 rounded-full" onClick={goBack}>Go Back</button>

            </div>
        </div>
    )
}

export default NotFound
