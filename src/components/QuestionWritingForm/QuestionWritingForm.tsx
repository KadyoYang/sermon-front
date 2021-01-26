import React from 'react';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import useAddQuestion from '../../hooks/useAddQuestion';
import HashTagCandidateList from '../QuestionSearchTag/components/HashTagCandidateList';



interface ModalProps{
    handleClose:()=>void,
}

const QuestionWritingForm: React.FC<ModalProps> = ({handleClose}) => {
    const {title, content, hashTags, setHashTags, onSetHashTags, onSetTitle, onSetContent, onAddQuestion} = useAddQuestion();
    
    

    return (
        <StyledContent>
            <TextField id="standard-basic" label="title" value={title} onChange={onSetTitle} type="text"/>
            <TextField id="standard-basic" label="content" multiline defaultValue="내용을 입력해주세요" value={content} onChange={onSetContent}/>
            <StyledQuestionSearchTag>
            <TextField id="standard-basic" label="hashTag" value={hashTags} onChange={onSetHashTags} type="text"/>
            <HashTagCandidateList hashTag={hashTags} setHashTag={setHashTags}/>
            </StyledQuestionSearchTag>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onAddQuestion();}}>완료</Button>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

const StyledQuestionSearchTag = styled.div`
box-sizing:border-box;
width:100%;
position:relative;
display:flex;
flex-direction:column;

`

export default QuestionWritingForm;