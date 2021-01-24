import React from 'react';
import styled from 'styled-components';
import  {useHistory} from 'react-router-dom';

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
    const history = useHistory();
    
    return (
        
        <StyledQuestionCard onClick={()=>{history.push("/question/"+question.id)}}>
          <StyledTitleTypo variant="subtitle1" color="secondary">고민 : {question.title}</StyledTitleTypo>
              


          <StyledTitleTypo variant="subtitle2" color="secondary">작성자 : {question.nickname}</StyledTitleTypo>
             



          <StyledContentTypo variant="subtitle2" color="secondary">내용 : {question.content}</StyledContentTypo>
                

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

const StyledTitleTypo = styled(Typography)`
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
`
const StyledContentTypo = styled(Typography)`
overflow:hidden;
text-overflow:ellipsis;
display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`
















export default QuestionCard;