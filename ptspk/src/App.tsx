import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./hooks/app";
import {
    setIDLEAppStatus
  } from './store/slices/appSlice';
import SyncManager from "./ui/features/SyncManager";


export const App = () => {

    const [appStatus] = useAppSelector((state) => [
        state.app.status
    ]);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setTimeout(() => {
          dispatch(setIDLEAppStatus())  
        }, 0);
    },[dispatch]);
    
    const renderSwitch = () => {
        switch (appStatus) {
            case 'loading':
                return <div>'loading'</div>;
            case 'idle':
                return <SyncManager/>;
            case 'failed':
                return <div>'failed'</div>;
            default:
                return <div>'default'</div>;
        }
    }

    return (<Container>
        {renderSwitch()}
    </Container>)
}