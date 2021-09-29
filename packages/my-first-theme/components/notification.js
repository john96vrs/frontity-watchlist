import React, { useState, useEffect } from 'react';
import notificationService from './notificationService';
import {Snackbar} from '@material-ui/core'

export default function Notification() {
    const [notificationstate, setNotificationState] = useState({ 
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    useEffect( () => {
        const subscription = notificationService.events$.subscribe(notification => setNotificationState(notification));

        return () => subscription.unsubscribe();
    })

    return (
        <Snackbar
            open={ notificationstate.open }
            onClose={ () => notificationService.close() }
            message= { "gelöscht" }
            autoHideDuration={ 3000 }
        />
    )
}