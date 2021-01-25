import { Fab, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { AnswerType, QuestionType } from '../../../models/models';

import ModifyIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useIsLoggedIn from '../../../hooks/useIsLoggedIn';
import useMyAccountInfo from '../../../hooks/useMyAccountInfo';
import useSimpleActionModal from '../../../hooks/useSimpleActionModal';
import AnswerModifyingForm from '../../AnswerModifyingForm';
import useDelAnswer from '../../../hooks/useDelAnswer';
import useLikeAnswer from '../../../hooks/useLikeAnswer';
import useAdoptAnswer from '../../../hooks/useAdoptAnswer';


interface AnswerCardProps {
    answer: AnswerType
    ownerAccountNumber:number
    onRefreshAnswerList : () => void
}

// (닉네임)으로부터의 답변 (제목) (내용) (추천수, 상태 )(추천, 채택, ||  수정, 삭제)
const AnswerCard: React.FC<AnswerCardProps> = ({ answer, ownerAccountNumber, onRefreshAnswerList}) => {
    const { isLoggedIn } = useIsLoggedIn();
    const { id } = useMyAccountInfo();
    const { showActionModal } = useSimpleActionModal();

    const onAfterActions = () => {
        onRefreshAnswerList();
    }
    const { onDelAnswer } = useDelAnswer(answer, onAfterActions);
    const { onLikeAnswer } = useLikeAnswer(answer, onAfterActions);
    const { onAdoptAnswer } = useAdoptAnswer(answer, onAfterActions);

    return (
        <StyledAnswerCard>
            <StyledAnswerNickname>
                <Typography color="secondary" gutterBottom>
                    {answer.nickname + "님으로부터의 답변"}
                </Typography>
            </StyledAnswerNickname>


            <StyledAnswerTitle>
                <Typography variant="h6" color="secondary">
                    {answer.title}
                </Typography>
            </StyledAnswerTitle>


            <StyledAnswerContent>

                <Typography variant="body1" color="secondary">
                    {answer.content}
                </Typography>
            </StyledAnswerContent>


            <StyledAnswerStatus>
                <Typography variant="body2" color="secondary">{"추천 : " + answer.star}</Typography>
                <Typography variant="body2" color="secondary">{"채택여부 : " + answer.adopted}</Typography>


            </StyledAnswerStatus>


            <StyledAnswerFunction>
                {
                    (id == answer.accountId) && (
                        <Tooltip title="수정" onClick={() => { }}>
                            <Fab color="primary" size="small" onClick={() => {
                                showActionModal("답변 수정", "답변을 수정하여 더욱 유익하게 만드세요", <AnswerModifyingForm answer={answer} callback={onAfterActions} />)
                            }}>
                                <ModifyIcon fontSize="small" />
                            </Fab>
                        </Tooltip>

                    )
                }
                {
                    (id == answer.accountId) && (
                        <Tooltip title="삭제" onClick={() => { }}>
                            <Fab color="primary" size="small" onClick={() => {
                                onDelAnswer();
                            }}>
                                <DeleteIcon fontSize="small" />
                            </Fab>
                        </Tooltip>
                    )
                }
                <Tooltip title="좋아요" onClick={() => { }}>
                    <Fab color="primary" size="small" onClick={() => {
                        onLikeAnswer();
                    }}>
                        <FavoriteIcon fontSize="small" />
                    </Fab>
                </Tooltip>
                {
                    (id == ownerAccountNumber) && (
                <Tooltip title="답변 채택" onClick={() => { }}>
                    <Fab color="primary" size="small" onClick={() => {
                        onAdoptAnswer();
                    }}>
                        <CheckCircleIcon fontSize="small" />
                    </Fab>
                </Tooltip>
                                    )
                                }
            </StyledAnswerFunction>
        </StyledAnswerCard>
    )
}


const StyledAnswerCard = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
box-sizing:border-box;
margin-bottom:1rem;
border: 1px solid ${props => props.theme.palette.primary.light};
border-width: 1px 0px;
padding: 0.4rem 0;
&:hover{
    background-color: ${props => props.theme.palette.primary.main};
}
`

const StyledAnswerNickname = styled.div`
padding-left:1.6rem;
box-sizing:border-box;
`
const StyledAnswerTitle = styled.div`
padding-left:1.6rem;
box-sizing:border-box;
`
const StyledAnswerContent = styled.div`
padding-left:1.6rem;
box-sizing:border-box;
`
const StyledAnswerStatus = styled.div`
display:flex;
justify-content:space-around;
margin: 0 1.6rem;
box-sizing:border-box;
border: 1px solid ${props => props.theme.palette.primary.light};
border-width: 1px 0;
padding: 0.3rem 0px;
`
const StyledAnswerFunction = styled.div`
display:flex;
justify-content:space-around;
margin: 0 1.6rem;
box-sizing:border-box;
border: 1px solid ${props => props.theme.palette.primary.light};
border-width: 1px 0;
padding: 0.3rem 0px;
`




export default AnswerCard;