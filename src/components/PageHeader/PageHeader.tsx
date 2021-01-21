import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';





interface PageHeaderProps {
  icon: string,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {

  return (
      <StyledPageHeader>
        <Typography variant="h6" gutterBottom>{title}</Typography>

        <StyledImageSpace>
          <img src={icon} />
          <StyledSubTitleOnTheImage>
            <Typography variant="subtitle2" gutterBottom>{subtitle}</Typography>
          </StyledSubTitleOnTheImage>
        </StyledImageSpace>


      </StyledPageHeader>

  )
}

const StyledPageHeader = styled.div`
display: flex;
flex-direction: column;
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







export default PageHeader
