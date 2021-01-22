import React from 'react';
import styled from 'styled-components';


const MainFrame: React.FC = ({children}) => {
    return(
        <Container>      
            <LeftContent>{children}</LeftContent>
            <RightBlank></RightBlank>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-grow: 7;
`

const RightBlank = styled.div`
background-color: black;
`

const LeftContent = styled.div`

`



export default MainFrame;