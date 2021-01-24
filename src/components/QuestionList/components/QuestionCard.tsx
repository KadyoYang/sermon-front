import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { QuestionType } from '../../../models';



interface QuestionCardProps{
    question: QuestionType
}
const QuestionCard: React.FC<QuestionCardProps> = ({question}) => {
    return (
        
        <StyledQuestionCard>
          <Typography variant="h5" color="secondary">
              {question.title}
          </Typography>

          <Typography color="secondary" gutterBottom>
              {question.accountId}
        </Typography>

          <Typography variant="body2" color="secondary">
                {question.content}
          </Typography>

        </StyledQuestionCard>

        );
}

const StyledQuestionCard = styled.div`
background-color:${props => props.theme.palette.primary.main};
max-width:30%;
min-width:30%;
&:hover{
    background-color:${props => props.theme.palette.primary.light};
}
cursor:pointer;

border: 1px solid ${props => props.theme.palette.primary.light};
margin: 0.3rem;
padding: 0.3rem;
box-sizing: border-box;
`















export default QuestionCard;