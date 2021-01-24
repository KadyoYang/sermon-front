import React from 'react';
import styled from 'styled-components';



export const SubContent:React.FC = ({children}) =>{
    return (
        <StyledSubContent>
            {children}
        </StyledSubContent>
    )
}


const StyledSubContent = styled.div`
max-width:350px;
margin-left:1.2rem;

box-sizing: border-box;

display:flex;
flex-direction:column;
align-items:stretch;
`