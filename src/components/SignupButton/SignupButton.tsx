import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useSignup from '../../hooks/useSignup';
import useSimpleActionModal from '../../hooks/useSimpleActionModal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { JsxEmit } from 'typescript';

import SignupForm from './components/SignupForm';


const SignupButton:React.FC = () => {
    const {showActionModal, handleClose} = useSimpleActionModal();

    return (
            <Button variant="contained" color="secondary" onClick={()=>{showActionModal("회원가입", "정보를 입력해주세요", <SignupForm handleClose={handleClose} />);}}>
                <Typography variant="subtitle1" gutterBottom>회원가입</Typography>
            </Button>
    )

}

const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`


export default SignupButton;