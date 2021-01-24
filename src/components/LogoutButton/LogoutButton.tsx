import React, { useEffect, useState } from 'react';

import useSimpleActionModal from '../../hooks/useSimpleActionModal';

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import LogoutForm from './components/LogoutForm';



const LogoutButton:React.FC = () => {
    const {showActionModal, handleClose} = useSimpleActionModal();

    return (
            <Button variant="contained" color="secondary" onClick={()=>{
                showActionModal("로그아웃", "정말로 로그아웃 하시겠습니까?", <LogoutForm handleClose={handleClose} />)}}>
                <Typography variant="subtitle1" gutterBottom>로그아웃</Typography>
            </Button>
    )
}



export default LogoutButton;