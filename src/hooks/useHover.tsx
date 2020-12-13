import { useEffect, useRef } from "react";

export const useClick = (onHover: ()=>void) => {
    const element = useRef<HTMLElement>();

    if(typeof onHover !== 'function'){
        return ;
    }
    
    useEffect(() => {
        if(element.current !== undefined){
            element.current.addEventListener('click', onHover);
        }
        return () => {
            if(element.current !== undefined){
                element.current.removeEventListener('click', onHover)
            }
        };
    },[]);
    return element;
};