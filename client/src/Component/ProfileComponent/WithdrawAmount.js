import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from '../../Assets/Scripts/ToastError';
import toastSuccess from '../../Assets/Scripts/ToastSuccess';
import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookie = new Cookies();

const WithdrawAmount = (props) => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    const [userData, setUserData] = useState({
        name: '', amount: '', ifscCode: '', bankAccountNumber: '', confBankAccountNumber: ''
    })



    const submitHandler = e => {
        e.preventDefault()
        const { name, amount, ifscCode, bankAccountNumber, confBankAccountNumber } = userData

        if (!name || !amount || !ifscCode || !bankAccountNumber || !confBankAccountNumber) {

            toastError('All Field Required')
            return
        }

        if (amount > props.totalAmount) {
            toastError('Amount Should not be Greater Than Total Earned Amount')
            return
        }

        if (amount < 50) {
            toastError('Amount Should be Greater Than 50')
            return
        }

        if (bankAccountNumber != confBankAccountNumber) {
            toastError('Bank Account Number Mismatch')
            return
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/withdrawamount', { userData, totalAmount: props.totalAmount }, config).then(res => {
            console.log('Res', res.data)
            toastSuccess(res.data.msg)
        }).catch(err => {
            console.log(err)
            toastError('Something Went Wrong')
        })

    }
    return (

        <div>

            <div>
                <button type='button' className='btn bg-indigo-400 hover:bg-indigo-700 hover:text-white px-2 rounded-sm' onClick={() => setOpen(true)}>
                    Withdraw Amount
                </button>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                Withdraw Amount
                                                <p className="text-sm text-gray-500">
                                                    Minimum Withdrawable Amount is ₹ 50
                                                </p>
                                            </Dialog.Title>
                                            <div className="mt-2 text-left">

                                                <form method='post' onSubmit={submitHandler}>
                                                    <div className="relative z-0 w-full mb-5 ">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder=" "
                                                            value={userData.name}
                                                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                                                            className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                        />
                                                        <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>

                                                    </div>
                                                    <div className="relative z-0 w-full mb-5">
                                                        <input
                                                            type="number"
                                                            name="amount"
                                                            placeholder=" "
                                                            value={userData.amount}
                                                            onChange={e => setUserData({ ...userData, amount: e.target.value })}
                                                            className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                        />
                                                        <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Amount</label>

                                                    </div>
                                                    <div className="relative z-0 w-full mb-5">
                                                        <input
                                                            type="text"
                                                            name="ifscCode"
                                                            placeholder=" "
                                                            value={userData.ifscCode}
                                                            onChange={e => setUserData({ ...userData, ifscCode: e.target.value })}
                                                            className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                        />
                                                        <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Bank IFSC Code</label>

                                                    </div>
                                                    <div className="relative z-0 w-full mb-5">
                                                        <input
                                                            type="text"
                                                            name="bankAccountNumber"
                                                            placeholder=" "
                                                            value={userData.bankAccountNumber}
                                                            onChange={e => setUserData({ ...userData, bankAccountNumber: e.target.value })}
                                                            className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                        />
                                                        <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Bank Account Number</label>

                                                    </div>
                                                    <div className="relative z-0 w-full mb-5">
                                                        <input
                                                            type="text"
                                                            name="confBankAccountNumber"
                                                            placeholder=" "
                                                            value={userData.confBankAccountNumber}
                                                            onChange={e => setUserData({ ...userData, confBankAccountNumber: e.target.value })}
                                                            className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                        />
                                                        <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Confirm Bank Account Number</label>

                                                    </div>
                                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <button
                                                            type="submit"
                                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Submit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-red-500 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                            onClick={() => setOpen(false)}
                                                            ref={cancelButtonRef}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <ToastContainer />
        </div>
    )
}

export default WithdrawAmount
