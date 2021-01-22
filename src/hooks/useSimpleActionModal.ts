import React, {useContext, useState} from 'react';
import {Context} from '../contexts/SimpleActionModalProvider';


const useSimpleActionModal = () => {
    const {fillTitle, fillSubTitle, handleOpen, handleClose, fillContent} = useContext(Context);

    const showActionModal = (title:string, subTitle:string, content:React.ReactNode) =>{
        fillTitle(title);
        fillSubTitle(subTitle);
        fillContent(content);
        handleOpen();
    }
    return {showActionModal, handleClose};
}

export default useSimpleActionModal;