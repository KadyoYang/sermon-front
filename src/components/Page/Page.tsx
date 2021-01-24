import React from 'react';
import styled from 'styled-components';


const Page: React.FC = ({children}) => {
    return (
            <StyledPage>
                {children}
            </StyledPage>
    );
}


const StyledPage = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
// border:1px solid white;
`



export default Page;