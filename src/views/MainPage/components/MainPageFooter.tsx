import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';


const MainPageFooter:React.FC = () => {


    return (
        <FooterContainer>
            <StyledTypography variant="subtitle2" color="secondary" gutterBottom>
                작성자 ckyang(https://github.com/jindogNoob)
            </StyledTypography>
            <StyledTypography variant="subtitle2" color="secondary" gutterBottom>
                저작권 자유
            </StyledTypography>
            <StyledTypography variant="subtitle2" color="secondary" gutterBottom>
                MATERIAL-UI
            </StyledTypography>
        </FooterContainer>

    );
}


const FooterContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;
width:100%;
height: 50px;
background-color: ${props => props.theme.palette.primary.dark};
position:absolute;
bottom:0;
`
const StyledTypography = styled(Typography)`
margin:0 10px;
`




export default MainPageFooter;