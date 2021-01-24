import React from 'react';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import useAddQuestion from '../../hooks/useAddQuestion';



interface ModalProps{
    handleClose:()=>void,
}

const QuestionWritingForm: React.FC<ModalProps> = ({handleClose}) => {
    const {title, content, onSetTitle, onSetContent, onAddQuestion} = useAddQuestion();
    


    return (
        <StyledContent>
            <TextField id="standard-basic" label="title" value={title} onChange={onSetTitle} type="text"/>
            <TextField id="standard-basic" label="content" multiline defaultValue="내용을 입력해주세요" value={content} onChange={onSetContent}/>
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

export default QuestionWritingForm;