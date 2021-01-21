import React, {useContext, useState} from 'react';

import {Context} from '../contexts/SimpleAlertProvider';


const useSimpleAlert = () => {
    const {fillTitle, fillSubTitle, handleOpen, handleClose} = useContext(Context);

    const showAlert = (title:string, subTitle:string) => {
        fillTitle(title);
        fillSubTitle(subTitle);
        handleOpen();
    }
    return showAlert;
}

export default useSimpleAlert;


