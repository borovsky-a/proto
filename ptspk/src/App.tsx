import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/app";
import {
    setIDLEAppStatus
  } from './store/slices/appSlice';


export const App = () => {

    const [appStatus] = useAppSelector((state) => [
        state.app.status
    ]);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setTimeout(() => {
          dispatch(setIDLEAppStatus())  
        }, 3000);
    },[]);
    const renderSwitch = () => {
        switch (appStatus) {
            case 'loading':
                return <div>'loading'</div>;
            case 'idle':
                return <div>'idle'</div>;
            case 'failed':
                return <div>'failed'</div>;
            default:
                return <div>'default'</div>;
        }
    }

    return (<>
        {renderSwitch()}
    </>)
}