import React from 'react';

import styled from 'styled-components';
import useSignup from '../../../hooks/useSignup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import useLogin from '../../../hooks/useLogin';
import useIsLoggedIn from '../../../hooks/useIsLoggedIn';
import useJwt from '../../../hooks/useJwt';


interface ModalProps{
    handleClose:()=>void,
}

const LogoutForm: React.FC<ModalProps> = ({handleClose}) => {
    const {onSetIsLoggedIn} = useIsLoggedIn();
    const {onSetToken} = useJwt();
    const onLogout = () => {
        localStorage.removeItem("token");
        onSetIsLoggedIn(false);
        onSetToken("");
        handleClose();
    }


    return (
        <StyledContent>
            <StyledButton color="secondary" onClick={()=>{handleClose();}}>취소</StyledButton>
            <StyledButton color="secondary" onClick={()=>{onLogout();}}>로그아웃</StyledButton>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
justify-content:center;
`
const StyledButton = styled(Button)`
flex-grow:1
`

export default LogoutForm;