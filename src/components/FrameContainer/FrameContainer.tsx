import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import {useTheme} from '@material-ui/core/styles';
import { isPropertySignature } from 'typescript';

const FrameContainer: React.FC = ({children}) => {
    // const theme = useTheme();

    return(
        
        <Content>
            {children}
        </Content>

    )
}



const Content = styled.div`
display: flex;
padding: 10px;
width:100vw;
height:100vh;
background-color: ${props => props.theme.palette.primary.dark};
`




export default FrameContainer;