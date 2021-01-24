import React from 'react'
import styled from 'styled-components'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';







const PageContent: React.FC = ({children}) => {

  return (
      <StyledPageContent>
          {children}
      </StyledPageContent>

  )
}



const StyledPageContent = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin-top: 3rem;
`


export default PageContent;
