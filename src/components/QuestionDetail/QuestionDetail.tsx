import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useParams, useHistory } from "react-router-dom";

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BackSpace from '@material-ui/icons/KeyboardBackspace'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionDetailCard from './components/QuestionDetailCard';
import AnswerList from './components/AnswerList';
import useGetAnswerList from '../../hooks/useGetAnswerList';
interface RouteParams{
    questionId:string
}
const QuestionDetail: React.FC = () => {
   const params = useParams<RouteParams>();
   const questionId = Number(params.questionId);
   const {question, onFetchQuestion} = useGetQuestion();
   const {answers, fetchAnswerList} = useGetAnswerList();

    const history = useHistory();

   useEffect(()=>{
       onFetchQuestion(questionId);
       fetchAnswerList(questionId);
   }, []);

   const onRefreshAnswerList = () => {
       fetchAnswerList(questionId);
   }

   
    return (
        <StyledQuestionDetailContainer>
            <StyledIconSpace>            
                <Tooltip title="뒤로가기" onClick={()=>{history.goBack();}}>
                    <Fab color="primary" size="small">
                        <BackSpace />
                    </Fab>
                </Tooltip>
            </StyledIconSpace>


            <StyledQuestionDetail>
                <QuestionDetailCard question={question} onFetchQuestion={onFetchQuestion} onRefreshAnswerList={onRefreshAnswerList}/>
            </StyledQuestionDetail>

            <StyledAnswersContainer>
                <AnswerList ownerAccountNumber={question.accountId} answers={answers} onRefreshAnswerList={onRefreshAnswerList} />
            </StyledAnswersContainer>
        </StyledQuestionDetailContainer>

    )
}

const StyledQuestionDetailContainer = styled.div`
display:flex;
flex-direction:column;
`
const StyledIconSpace = styled.div`
align-self: flex-start;
margin-left:0.5rem;
margin-bottom:0.5rem;
`

const StyledQuestionDetail = styled.div`

`

const StyledAnswersContainer = styled.div`
display:flex;
flex-direction:column;
align-items:stretch
`


export default QuestionDetail;