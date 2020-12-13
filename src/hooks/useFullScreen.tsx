import { useRef } from "react";

export const useFullScreen = (callback: (value: boolean)=> void) => {
    const element = useRef<HTMLImageElement>();
    const trigger = () => {
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback === 'function'){
                callback(true);
            }   
        }        
    }
    const exitFullScreen = () => {
        document.exitFullscreen();   
        if(callback && typeof callback === 'function'){
            callback(false);
        }   
    }

    return {element, trigger, exitFullScreen};
}