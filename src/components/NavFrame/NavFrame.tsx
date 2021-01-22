import React from 'react';
import styled from 'styled-components';


const NavFrame: React.FC = ({children}) => {
    return(
        <Container>
            <LeftBlank></LeftBlank>{/* 아무것도 없는 빈칸 */}
            <RightContent>{children}</RightContent>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-grow: 3;
`

const LeftBlank = styled.div`
background-color: black;
`

const RightContent = styled.div`

`



export default NavFrame;