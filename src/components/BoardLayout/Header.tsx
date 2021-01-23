import React from 'react';
import styled from 'styled-components';


export const Header:React.FC = ({children}) => {

    return (
    <SytledHeader>
        {children}
    </SytledHeader>
    )
}


const SytledHeader = styled.div`
flex-grow:2;

align-items: flex-end;
user-select: none; // 글자 드래그 nono

border: 0px solid black;
box-sizing: border-box;
display:flex;
flex-basis: auto;
flex-direction: column;
flex-shrink: 0;
margin:0px;
min-height:0px;
min-width:0px;
padding:0px;
position:relative;
`
