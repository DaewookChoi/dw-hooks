import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (options: any, axiosInstance = axios) => {

    const [state, setState] = useState({loading: true , error: null, data: null});
    const [trigger, setTrigger] = useState<Date>();
    if(!options.url){
        return;
    }

    const reFetch = ()=> {
        setState({
            ...state,
            loading: true
        });
        setTrigger(new Date());
    }

    useEffect(() => {
        axios(options).then((data: any) => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch((error: any) => {
            setState({
                ...state,
                loading: false,
                error
            });
        });
    }, [trigger]);

    return {...state, reFetch};
}