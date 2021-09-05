import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const displayNotification = () => {

    console.log('display notification')

    if (localStorage.getItem('address')) {
        toast.error('Address is required', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        localStorage.clear()
    }
}

export default displayNotification