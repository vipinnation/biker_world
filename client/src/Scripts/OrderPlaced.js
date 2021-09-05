import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const orderPlaced = () => {

    console.log('display notification')

    if (localStorage.getItem('orderPlaced')) {
        toast.success('Order Placed Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
 
    }
}

export default orderPlaced