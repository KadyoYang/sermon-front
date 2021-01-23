import React from 'react';
import styled from 'styled-components';

const BoardLayout:React.FC = ({children}) => {


    return (
        <StyledBoardLayout>
            {children}
        </StyledBoardLayout>
    )
}

const StyledBoardLayout = styled.div`
min-height: 600px;
display:flex;
flex-direction:row;
width:100vw;
align-items: stretch;
box-sizing:border-box;
flex-basis:auto;
position:relative;

scrollbar-color:${props => props.theme.palette.primary.main};
background-color:${props => props.theme.palette.primary.dark};
`

export default BoardLayout;