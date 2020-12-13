import { useEffect, useRef } from "react";

export const useClick = (onClick: ()=>void) => {
    const element = useRef<HTMLElement>();

    if(typeof onClick !== 'function'){
        return ;
    }
    
    useEffect(() => {
        if(element.current !== undefined){
            element.current.addEventListener('click', onClick);
        }
        return () => {
            if(element.current !== undefined){
                element.current.removeEventListener('click', onClick)
            }
        };
    },[]);
    return element;
};