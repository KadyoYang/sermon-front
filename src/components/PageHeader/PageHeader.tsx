import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  center: {
    alignSelf: "center"
  }
});


interface PageHeaderProps {
  icon: string,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  const classes = useStyles();

  return (
      <StyledPageHeader>
        <Typography variant="h5" className={classes.center}color="secondary" gutterBottom>{title}</Typography>

        <StyledImageSpace>
          <StyledImage src={icon}/>
          <StyledSubTitleOnTheImage>
            <Typography variant="h6" color="secondary" gutterBottom>{subtitle}</Typography>
          </StyledSubTitleOnTheImage>
        </StyledImageSpace>


      </StyledPageHeader>

  )
}

const StyledPageHeader = styled.div`
display: flex;
flex-direction: column;
align-items:stretch;
margin-bottom:3px;
`

const StyledImageSpace = styled.div`

position:relative;
text-align: center;

width: 100%;
height: 100%;
`

const StyledSubTitleOnTheImage = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`

const StyledImage = styled.img`
max-height:150px;
width: 100%;
opacity:0.5;
`





export default PageHeader
