import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface ProposalProps {
    title: string,
    content: string,
    buttonContent : string,
    buttonOnClick: () => void,
}


const Proposal: React.FC<ProposalProps> = ({title, content, buttonContent, buttonOnClick}) => {

    return (
        <StyledProposalContainer>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="subtitle1" gutterBottom>{content}</Typography>
            <Button color="secondary" onClick={buttonOnClick}>
                <Typography variant="button">{buttonContent}</Typography>
            </Button>
        </StyledProposalContainer>
    )
    
}

const StyledProposalContainer = styled.div`
border-radius: 20px;
border:1px solid white;
width: 100%;
height: 100%;
`

export default Proposal;