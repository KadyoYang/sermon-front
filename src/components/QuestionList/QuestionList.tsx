import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useQuestions from '../../hooks/useQuestions';
import QuestionCard from './components/QuestionCard';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ErrorIcon from '@material-ui/icons/Error'
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import useSimpleActionModal from '../../hooks/useSimpleActionModal';
import QuestionWritingForm from '../QuestionWritingForm';




const QuestionList: React.FC = ({ }) => {
    const { questions } = useQuestions();
    const { isLoggedIn } = useIsLoggedIn();

    const {showActionModal, handleClose} = useSimpleActionModal();

    return (
        <StyledQuestionContainer>
            <StyledIconSpace>
                {isLoggedIn ? (
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary" onClick={()=>{
                            showActionModal("고민 입력", "당신의 고민을 여기에 적어주세요", <QuestionWritingForm handleClose={handleClose}/>);
                        }}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                ) : (
                        <Tooltip title="please login first" >
                            <Fab color="primary">
                                <ErrorIcon />
                            </Fab>
                        </Tooltip>
                    )}


            </StyledIconSpace>
            <StyledQuestionList>


                {questions.map((i) => (
                    <QuestionCard question={i} key={i.id} />
                ))}
            </StyledQuestionList>
        </StyledQuestionContainer>

    )
}

const StyledQuestionContainer = styled.div`
display:flex;
flex-direction:column;
`
const StyledIconSpace = styled.div`
align-self: flex-end;
margin-right:0.5rem;
`

const StyledQuestionList = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-around; 
`




export default QuestionList;


