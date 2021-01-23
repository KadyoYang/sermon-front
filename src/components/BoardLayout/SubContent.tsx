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
margin-right:10px;

display:flex;
flex-direction:column;
align-items:stretch;
`