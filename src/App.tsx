import React, {useCallback, useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import ColorThemeProvider from './contexts/ColorThemeProvider';
import AccountStatusProvider from './contexts/AccountStatusProvider';
import SimpleAlertProvider from './contexts/SimpleAlertProvider';
import SimpleActionModalProvider from './contexts/SimpleActionModalProvider';

import FrameContainer from './components/FrameContainer';
import MainFrame from './components/MainFrame';
import NavFrame from './components/NavFrame';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <FrameContainer>
          <NavFrame>

          </NavFrame>
        
        <Switch>
          <Route path="/" exact>
            <MainFrame>

            </MainFrame>
          </Route>
          <Route path="/lottery" exact>

          </Route>
          <Route path="/wallet" exact>

          </Route>
          <Route path="/law" exact>

          </Route>
        </Switch>


        </FrameContainer>
      </BrowserRouter>
    </Providers>
  );
}

const Providers: React.FC = ({children}) => {
  return (
    <SimpleActionModalProvider>
    <SimpleAlertProvider>
    <AccountStatusProvider>
    <ColorThemeProvider>
      {children}
    </ColorThemeProvider>
    </AccountStatusProvider>
    </SimpleAlertProvider>
    </SimpleActionModalProvider>

  )
}

export default App;
