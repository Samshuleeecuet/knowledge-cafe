import React from 'react';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToast = ({newQuantity}) => {

    const notify = () =>{
        toast ("Already Bookmarked");
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ReactToast;