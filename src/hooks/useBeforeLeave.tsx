import { EventEmitter } from "events";
import { useEffect } from "react";

export const useBeforeLeave = (onBefore: ()=>void) => {

    if(typeof onBefore !== 'function'){
        return;
    }

    const handle = (event: MouseEvent) => {
        const { clientY } = event;
        if(clientY <= 0){
            onBefore();
        }
    }


    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mouseleave', handle);
    }, []);

}