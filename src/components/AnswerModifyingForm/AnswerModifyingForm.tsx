import React from 'react';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { AnswerType } from '../../models/models';
import useModAnswer from '../../hooks/useModAnswer';
import useSimpleActionModal from '../../hooks/useSimpleActionModal';





interface ModalProps{
    callback:()=>void
    answer:AnswerType
}

const AnswerModifyingForm: React.FC<ModalProps> = ({callback, answer}) => {
    const {title, content, onSetTitle, onSetContent, onModAnswer} = useModAnswer(answer, callback);

    const {handleClose} = useSimpleActionModal();
    return (
        <StyledContent>
            <TextField id="standard-basic" label="title" value={title} onChange={onSetTitle} type="text"/>
            <TextField id="standard-basic" label="content" multiline defaultValue="내용을 입력해주세요" value={content} onChange={onSetContent}/>
            <Button color="secondary" onClick={()=>{handleClose();}}>취소</Button>
            <Button color="secondary" onClick={()=>{onModAnswer();}}>완료</Button>
        </StyledContent>
    )
}


const StyledContent = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

export default AnswerModifyingForm;