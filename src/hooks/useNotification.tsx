import { useEffect } from "react";

interface NotificationOptions {
    dir?: NotificationDirection;
    lang?: string;
    body?: string;
    tag?: string;
    image?: string;
    icon?: string;
    badge?: string;
    sound?: string;
    vibrate?: number | number[],
    timestamp?: number,
    renotify?: boolean;
    silent?: boolean;
    requireInteraction?: boolean;
    data?: any;
    actions?: NotificationAction[]
}

export const useNotification = (title: string, options: NotificationOptions)=> {
    if(!('Notification' in window)){
        return;
    }

    const fireNotification = () => {
        if(Notification.permission !== 'granted'){
            Notification.requestPermission().then((permission: string) => {
                if(permission === 'granted'){
                    new Notification(title, options); 
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options); 
        }

    }
    return fireNotification;

}