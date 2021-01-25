import React from 'react';
import styled from 'styled-components';
import useGetAnswerList from '../../../hooks/useGetAnswerList';
import { AnswerType } from '../../../models/models';
import AnswerCard from './AnswerCard';

interface AnswerListProps{
    answers: AnswerType[]|undefined
    onRefreshAnswerList : ()=>void
    ownerAccountNumber: number
}

const AnswerList:React.FC<AnswerListProps> = ({answers, onRefreshAnswerList, ownerAccountNumber}) => {
    
    

    return (
    <StyledAnswerList>
        {answers?.map((i)=>(
            <AnswerCard ownerAccountNumber={ownerAccountNumber} answer={i} onRefreshAnswerList={onRefreshAnswerList} key={i.id} />
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