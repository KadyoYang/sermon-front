import React from 'react';
import styled from 'styled-components';
import AccountTag from '../../components/AccountTag/AccountTag';
import MainPageFooter from './components/MainPageFooter';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import mainhalf from '../../assets/image/mainhalf.png'
import {useHistory} from 'react-router-dom';
const MainPage:React.FC = () => {
    const history = useHistory();
    
    return (
        <MainPageContainer>

            <MainPageContentContainer>
                <MainPageContentLeftElement>
                    <Typography variant="h3" >고민을 공유하세요</Typography>
                    <Typography variant="h6" gutterBottom>혼자서 고민을 전부 감당하지 마세요!</Typography>
                    
                    <Typography variant="h3" >다른 사람의 고민에 대답해보세요</Typography>
                    <Typography variant="h6" gutterBottom>고민을 듣고 조언할 수 있습니다!</Typography>
                    <Button variant="outlined" color="primary" onClick={()=>{history.push("/question")}}><Typography variant="h3">지금 출발!</Typography></Button>
                </MainPageContentLeftElement>
                <MainPageContentRightElement>
                    <RightElement><AccountTag /></RightElement>
                    
                </MainPageContentRightElement>
            </MainPageContentContainer>

            <MainPageFooter />
        </MainPageContainer>


    )
}



const MainPageContainer = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
background-color: ${props => props.theme.palette.primary.dark};
position:relative;
`


const MainPageContentContainer = styled.div`
display:flex;
justify-content:center;
align-items: stretch;
flex-grow:1;

`
const MainPageContentLeftElement = styled.div`
background:linear-gradient(#91d8d4, rgba(255,255,255,0.5)), url(${mainhalf});
background-size: 100%;

width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`
const MainPageContentRightElement = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`
const RightElement = styled.div`
width: 30%;

`

export default MainPage;