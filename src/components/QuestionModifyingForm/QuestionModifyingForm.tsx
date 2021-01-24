import { Button, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useModQuestion from '../../hooks/useModQuestion';
import { QuestionType } from '../../models';


interface ModalProps{
    handleClose:()=>void,
    question: QuestionType
    onFetchQuestion : (questionId: number) => Promise<void>
}

const QuestionModifyingForm:React.FC<ModalProps> = ({handleClose, question, onFetchQuestion}) => {
    const {title, onSetTitle, content, onSetContent, onModQuestion} = useModQuestion(question, onFetchQuestion);

    return (
        <StyledContent>
            <TextField id="standard-basic" label="title" value={title} onChange={onSetTitle} type="text"/>
            <TextField id="standard-basic" label="content" multiline value={content} onChange={onSetContent}/>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onModQuestion();}}>완료</Button>
        </StyledContent>
    )
}

const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

export default QuestionModifyingForm;