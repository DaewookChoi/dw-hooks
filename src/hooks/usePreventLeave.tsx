import { EventEmitter } from "events";

export const preventLeave = () => {
    const listener = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = '';
    }

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.addEventListener("beforeunload", listener);

    return {enablePrevent, disablePrevent};
}