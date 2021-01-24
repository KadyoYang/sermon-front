import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { AnswerType } from '../../../models/models';


interface AnswerCardProps{
    answer:AnswerType
}

// (닉네임)으로부터의 답변 (제목) (내용) (추천수, 상태 )(추천, 채택, ||  수정, 삭제)
const AnswerCard:React.FC<AnswerCardProps> = ({answer}) => {

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
                <Typography variant="body2" color="secondary">{"채택여부 : " + answer.isAdopted}</Typography>


            </StyledAnswerStatus>


            <StyledAnswerFunction>

            </StyledAnswerFunction>
        </StyledAnswerCard>
    )
}


const StyledAnswerCard = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
`

const StyledAnswerNickname = styled.div`
`
const StyledAnswerTitle = styled.div`
`
const StyledAnswerContent = styled.div`
`
const StyledAnswerStatus = styled.div`
`
const StyledAnswerFunction = styled.div`
`




export default AnswerCard;