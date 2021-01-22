import React from 'react';

import styled from 'styled-components';
import useSignup from '../../../hooks/useSignup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import useLogin from '../../../hooks/useLogin';


interface ModalProps{
    handleClose:()=>void,
}

const LoginForm: React.FC<ModalProps> = ({handleClose}) => {

    const {email, password, onSetEmail, onSetPassword, onLogin} = useLogin();


    return (
        <StyledContent>
            <TextField id="standard-basic" label="Email" value={email} onChange={onSetEmail} type="email"/>
            <TextField id="standard-basic" label="Password" value={password} onChange={onSetPassword} type="password"/>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onLogin();}}>완료</Button>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

export default LoginForm;