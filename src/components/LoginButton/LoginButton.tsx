import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import useSimpleActionModal from '../../hooks/useSimpleActionModal';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import LoginForm from './components/LoginForm';


const LoginButton:React.FC = () => {
    const {showActionModal, handleClose} = useSimpleActionModal();

    return (
            <Button variant="contained" color="secondary" onClick={()=>{
                showActionModal("로그인", "로그인을 완료하고 고민을 공유하세요", <LoginForm handleClose={handleClose} />)}}>
                <Typography variant="subtitle1" gutterBottom>로그인</Typography>
            </Button>
    )
}



export default LoginButton;