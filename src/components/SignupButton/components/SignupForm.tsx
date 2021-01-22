import React from 'react';

import styled from 'styled-components';
import useSignup from '../../../hooks/useSignup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


interface ModalProps{
    handleClose:()=>void,
}

const SignupForm: React.FC<ModalProps> = ({handleClose}) => {

    const {email, password, nickname, onSetEmail, onSetPassword, onSetNickname, onSignup} = useSignup();


    return (
        <StyledContent>
            <TextField id="standard-basic" label="Email" value={email} onChange={onSetEmail} type="email"/>
            <TextField id="standard-basic" label="Password" value={password} onChange={onSetPassword} type="password"/>
            <TextField id="standard-basic" label="Nickname" value={nickname} onChange={onSetNickname}/>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onSignup();}}>완료</Button>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

export default SignupForm;