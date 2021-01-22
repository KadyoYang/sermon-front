import React from 'react';
import styled from 'styled-components';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import useMyAccountInfo from '../../hooks/useMyAccountInfo';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';



const AccountTag: React.FC = () => {
    const {isLoggedIn} = useIsLoggedIn();
    const {id, email, nickname, role} = useMyAccountInfo();


    return (
        <AccountTagContainer>
            {isLoggedIn == true
            ?(<Typography variant="subtitle1" gutterBottom>{nickname}님 반갑습니다.</Typography>)
            :(
                <StyledButtonContainer>
                    <Typography variant="subtitle1" color="secondary" gutterBottom>지금 로그인 해서 고민을 공유하세요</Typography>
                    <LoginButton />
                    <Typography variant="subtitle1" color="secondary" gutterBottom>계정이 없으신가요?</Typography>
                    <SignupButton />
                </StyledButtonContainer>
            )
            }
        </AccountTagContainer>
    )

}

const StyledButtonContainer = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`


const AccountTagContainer = styled.div`
border-radius: 20px;
border:1px solid white;
width: 100%;
height: 100%;
padding: 2rem;
`


export default AccountTag;