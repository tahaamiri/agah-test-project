"use client"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}

export default Wrapper