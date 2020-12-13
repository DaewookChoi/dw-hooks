import { useEffect, useState } from "react";

export const useNetwork = (onChange: (onLine: boolean)=>void) => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = ()=>{
        if(typeof onChange !== 'function'){
            return;
        }
        onChange(navigator.onLine);
        setStatus(navigator.onLine);
    }

    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);
        return () =>{
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        }
    });

    return status;
}