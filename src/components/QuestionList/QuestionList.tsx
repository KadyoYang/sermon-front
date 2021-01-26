import React, {useEffect, useCallback} from 'react';
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
import { Button, Typography } from '@material-ui/core';
import { RootStateType } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { setHashTagonRedux } from '../../redux/question';




const QuestionList: React.FC = ({ }) => {
    const { questions, fetchMoreQuestionList } = useQuestions();
    const { isLoggedIn } = useIsLoggedIn();

    const {showActionModal, handleClose} = useSimpleActionModal();
    const hashTag = useSelector((state:RootStateType)=> state.question.hashtag);
    const dispatch = useDispatch();

    // const loadOnScroll = useCallback(() =>{
    //     const winScroll = /* document.body.scrollTop ||  */document.documentElement.scrollTop; // 현재 위치
    //     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // height
    //     const scrolled = winScroll / height; // 1 맨밑 0 맨위
    //     if(scrolled > 0.9){
    //         console.log("triggered");
    //         fetchMoreQuestionList();
    //     }

    // }, []);

/*     useEffect(()=>{
        window.addEventListener('scroll', loadOnScroll, {passive:true});
        console.log("addEL");

        return () => {window.removeEventListener('scroll', loadOnScroll); console.log("removeEL")}
    }, []) */
    


    return (
        <StyledQuestionContainer>
            
            {hashTag != "" && (<StyledSearchResultIndicator><Typography variant="subtitle1" color="secondary" gutterBottom>{hashTag }로 검색결과</Typography>
            <Typography variant="subtitle1" onClick={()=>{dispatch(setHashTagonRedux(""))}} color="secondary">검색 초기화</Typography>
            </StyledSearchResultIndicator>)}
            
            
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
            <StyledLoadMore>
            <Button color="secondary" onClick={()=>{fetchMoreQuestionList();}}>
                <Typography variant="subtitle1" gutterBottom>더보기</Typography>
            </Button>
            </StyledLoadMore>

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

const StyledLoadMore = styled.div`
background-color:${props => props.theme.palette.primary.main};
&:hover{
    background-color:${props => props.theme.palette.primary.light};
}
cursor:pointer;

border: 1px solid ${props => props.theme.palette.primary.light};
margin: 0.3rem;
padding: 0.3rem;
box-sizing: border-box;
display:flex;
flex-direction:column;
align-items:stretch;
`

const StyledSearchResultIndicator = styled.div`
margin-left:2rem;
box-sizing:border-box;
`




export default QuestionList;


