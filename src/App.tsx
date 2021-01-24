import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import ColorThemeProvider from './contexts/ColorThemeProvider';
import AccountStatusProvider from './contexts/AccountStatusProvider';
import SimpleAlertProvider from './contexts/SimpleAlertProvider';
import SimpleActionModalProvider from './contexts/SimpleActionModalProvider';

import MainPage from './views/MainPage';
import QuestionListPage from './views/QuestionListPage'

import {createStore} from 'redux';
import rootReducer from './redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} /> {/* 반 왼쪽:소개 보러가기,  오른쪽:로그인 회원가입 */}

          <Switch>
              <Route exact path="/question" component={QuestionListPage}/>{/* 질문 리스트 */}
              <Route exact path="/question/:qid" /> {/* 질문 상세 */}
          </Switch>

      </BrowserRouter>
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    
<ColorThemeProvider>
<Provider store={store}>
  
<AccountStatusProvider>
    <SimpleAlertProvider>
    <SimpleActionModalProvider>
      
        
            {children}

      
    </SimpleActionModalProvider>
    </SimpleAlertProvider>
    </AccountStatusProvider>

    </Provider>
</ColorThemeProvider>
  )
}

export default App;
