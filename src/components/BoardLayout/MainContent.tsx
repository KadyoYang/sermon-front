import React from 'react';
import styled from 'styled-components';


export const MainContent:React.FC = ({children}) =>{
    return (
        <StyledMainContent>
            {children}
        </StyledMainContent>
    )
}


const StyledMainContent = styled.div`
max-width:600px;
margin: 0 0;
border-right-width: 1px;
border-left-width: 1px;
border-top-width: 0px;
border-bottom-width: 0px;
border-color:${props => props.theme.palette.primary.light};
border-style:solid;
width:100%;

display:flex;
flex-direction:column;
align-items:stretch;
`
