import { Fab, Tooltip, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGetQuestion from '../../../hooks/useGetQuestion';
import { QuestionType } from '../../../models';

import ModifyIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import AnswerIcon from '@material-ui/icons/NoteAdd';
import useMyAccountInfo from '../../../hooks/useMyAccountInfo';
import useSimpleActionModal from '../../../hooks/useSimpleActionModal';
import QuestionModifyingForm from '../../QuestionModifyingForm';
import useDelQuestion from '../../../hooks/useDelQuestion';

import { useHistory } from 'react-router-dom';
import AnswerWritingForm from '../../AnswerWritingForm';
import useIsLoggedIn from '../../../hooks/useIsLoggedIn';

interface QuestionCardProps {
    question: QuestionType
    onFetchQuestion: (questionId: number) => Promise<void>
    onRefreshAnswerList: () => void;
}
// (제목 닉네임) (내용) (조회수, 날짜, )
const QuestionDetailCard: React.FC<QuestionCardProps> = ({ question, onFetchQuestion, onRefreshAnswerList}) => {
    const { id } = useMyAccountInfo();
    const { showActionModal, handleClose } = useSimpleActionModal();
    const history = useHistory();
    const { onDelQuestion } = useDelQuestion(question, () => { history.push("/question") });
    const {isLoggedIn} = useIsLoggedIn();
    const callback = () => {
        onRefreshAnswerList();
    }

    return (
        <StyledQuestionCardContainer>
            <StyledQuestionHeader>
                <Typography variant="h5" color="secondary">
                    {"제목 : " + question.title}
                </Typography>
                <Typography color="secondary" gutterBottom>
                    {"글쓴이 : " + question.nickname}
                </Typography>

            </StyledQuestionHeader>


            <StyledQuestionContent>
                <Typography variant="body1" color="secondary">
                    {question.content}
                </Typography>
            </StyledQuestionContent>
            <StyledQuestionContent>
            {question.hashTags.map((i)=>(
                            <Typography variant="body1" color="secondary">
                                {"#"+i}
                            </Typography>
            ))}


            </StyledQuestionContent>
            <StyledTypo variant="body2" color="secondary">{"작성시간 : " + question.createdDate}</StyledTypo>

            <StyledQuestionFooter>
                <Typography variant="body2" color="secondary">{"상태 : " + question.status}</Typography>
                <Typography variant="body2" color="secondary">{"답변수 : " + question.answersSize}</Typography>
                <Typography variant="body2" color="secondary">{"조회수 : " + question.viewCount}</Typography>
            </StyledQuestionFooter>

            <StyledQuestionFooter>
                {
                    (id == question.accountId) && (


                        <Tooltip title="수정" onClick={() => { }}>
                            <Fab color="primary" size="small" onClick={() => {
                                showActionModal("고민 수정", "내용을 수정하세요", <QuestionModifyingForm handleClose={handleClose} question={question} onFetchQuestion={onFetchQuestion} />)
                            }}>
                                <ModifyIcon />
                            </Fab>
                        </Tooltip>
                    )
                }
                {
                    (id == question.accountId) && (
                        <Tooltip title="삭제" onClick={() => { }}>
                            <Fab color="primary" size="small" onClick={() => {
                                onDelQuestion();
                            }}>
                                <DeleteIcon />
                            </Fab>
                        </Tooltip>
                    )
                }
                {
                    (id != question.accountId && isLoggedIn) && (
                        <Tooltip title="답변하기" onClick={() => {
                            showActionModal("답변 작성", "작성자님의 소중한 지식을 나누어주세요", <AnswerWritingForm handleClose={handleClose} questionId={question.id} callback={callback} />);
                        }}>
                            <Fab color="primary" size="small">
                                <AnswerIcon />
                            </Fab>
                        </Tooltip>
                    )
                }

            </StyledQuestionFooter>

        </StyledQuestionCardContainer>
    )
}



const StyledQuestionCardContainer = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;

border: 1px solid ${props => props.theme.palette.primary.light};
border-right-width:0;
border-left-width:0;
border-bottom-width:0;

box-sizing:border-box;
padding:0.2rem;
padding-left:0.6rem;

`

const StyledQuestionHeader = styled.div`
display:flex;
flex-direction:column;
box-sizing:border-box;
margin-bottom:0.6rem;
margin-top:0.3rem;
padding-left: 1rem;
`

const StyledQuestionContent = styled.div`
box-sizing:border-box;
margin-bottom:0.6rem;
margin-left: 1rem;
`

const StyledQuestionFooter = styled.div`
box-sizing:border-box;
margin: 0.6rem 1rem;

border: 1px solid ${props => props.theme.palette.primary.light};
border-right-width:0;
border-left-width:0;

padding: 0.6rem 0px;

display:flex;
justify-content:space-around;
`






const StyledTypo = styled(Typography)`
padding-left: 1rem;
`




export default QuestionDetailCard;