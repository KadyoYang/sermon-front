import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import useSimpleActionModal from '../../hooks/useSimpleActionModal';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';



const LoginButton:React.FC = () => {
    const {email, password, onSetEmail, onSetPassword, onLogin} = useLogin();
    const {showActionModal, handleClose} = useSimpleActionModal();
    const [content, setContent] = useState<JSX.Element>((<div></div>));

    useEffect(()=>{
        setContent((
            <StyledContent>
                <TextField id="standard-basic" label="Email" value={email} onChange={onSetEmail} type="email"/>
                <TextField id="standard-basic" label="Password" value={password} onChange={onSetPassword} type="password"/>
                <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
                <Button color="secondary" onClick={()=>{onLogin();}}>완료</Button>
            </StyledContent>
        ));
    }, [])
    /* let content = (
        <StyledContent>
            <TextField id="standard-basic" label="Email" value={email} onChange={onSetEmail} type="email"/>
            <TextField id="standard-basic" label="Password" value={password} onChange={onSetPassword} type="password"/>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onLogin();}}>완료</Button>
        </StyledContent>
    ) */

    return (
            <Button variant="contained" color="secondary" onClick={()=>{showActionModal("로그인", "로그인을 완료하고 고민을 공유하세요", content);}}>
                <Typography variant="subtitle1" gutterBottom>로그인</Typography>
            </Button>
    )

}

const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;

`

export default LoginButton;