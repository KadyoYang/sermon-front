import React from 'react';
import styled from 'styled-components';
import useGetAnswerList from '../../../hooks/useGetAnswerList';
import { AnswerType } from '../../../models/models';
import AnswerCard from './AnswerCard';

interface AnswerListProps{
    answers: AnswerType[]|undefined
    fetchAnswerList : (questionId: number)=>Promise<void>
}

const AnswerList:React.FC<AnswerListProps> = ({answers, fetchAnswerList}) => {
    


    return (
    <StyledAnswerList>
        {answers?.map((i)=>(
            <AnswerCard answer={i} key={i.id} />
        ))}
    </StyledAnswerList>
    )
}

const StyledAnswerList = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

export default AnswerList;