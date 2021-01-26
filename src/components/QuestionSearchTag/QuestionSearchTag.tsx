import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';

import {useHistory, useLocation} from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search'
import useQuery from '../../hooks/useQuery';
import useQuestions from '../../hooks/useQuestions';
import { useDispatch } from 'react-redux';
import { setHashTagonRedux } from '../../redux/question';
import SelectInput from '@material-ui/core/Select/SelectInput';
import HashTagCandidateList from './components/HashTagCandidateList';

const useStyles = makeStyles((theme) => ({
    input:{
        color: theme.palette.secondary.main
    }
  }));

const QuestionSearchTag: React.FC = () => {
    const [hashTags, setHashTags] = useState("");
    const {refreshQuestions} = useQuestions();
    const dispatch = useDispatch();
    const onSetHashTags = (e: React.ChangeEvent<HTMLInputElement>)=>{setHashTags(e.target.value);}
    const onPressEnter = (e: React.KeyboardEvent) => {
        if(e.key == 'Enter') {
            console.log("enter");
            dispatch(setHashTagonRedux(hashTags));
        }
    }
    const classes = useStyles();

    return (
        <StyledQuestionSearchTag>
            <StyledTextField
                value={hashTags}
                onChange={onSetHashTags}
                onKeyPress={onPressEnter}
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
            <HashTagCandidateList hashTag={hashTags} setHashTag={setHashTags} />
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
position:relative;

`



export default QuestionSearchTag;