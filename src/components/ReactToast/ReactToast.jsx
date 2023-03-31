import React from 'react';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToast = () => {

    const notify = () =>{
        toast ("Already Bookmarked");
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <button onClick={notify}>Notify!</button>
        </div>
    );
};

export default ReactToast;