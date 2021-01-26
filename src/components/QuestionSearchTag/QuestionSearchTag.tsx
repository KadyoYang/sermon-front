import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    input:{
        color: theme.palette.secondary.main
    }
  }));

const QuestionSearchTag: React.FC = () => {

    const classes = useStyles();
    return (
        <StyledQuestionSearchTag>
            <StyledTextField
                id="input-with-icon-textfield"
                InputProps={{
                    className:classes.input,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </StyledQuestionSearchTag>
    )
}

const StyledTextField = styled(TextField)`
width:100%;
border-radius: 10px;
background-color:${props => props.theme.palette.primary.light};

box-sizing:border-box;

color: white;

`

const StyledQuestionSearchTag = styled.div`
width: 100%;
box-sizing:border-box;
margin: 0.6rem 0;

`

export default QuestionSearchTag;