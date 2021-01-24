import React from 'react';
import styled from 'styled-components';


export const Content:React.FC = ({children}) => {

    return (
        <StyledContent>
            <StyledContentSub>
                {children}
            </StyledContentSub>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
align-items:flex-start;


flex-shrink:1;
flex-grow:1;
flex-basis:auto;

position:relative;

box-sizing:border-box;

`

const StyledContentSub = styled.div`
display:flex;

align-items:stretch;
justify-content: flex-start;
width:990px;
flex-shrink:0;
flex-grow:2;

min-height:100vh;

`