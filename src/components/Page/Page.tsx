import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        background: "#90caf9",
        padding: "0.7rem",
        marginTop: "0.5rem",
    },
    paper: {
      minHeight: "45rem"
        
    },
  }),
);


const Page: React.FC = ({children}) => {
    const classes = useStyles();
    return (
            <StyledPage>
                {children}
            </StyledPage>
    );
}


const StyledPage = styled.div`
border:1px solid white;
`



export default Page;