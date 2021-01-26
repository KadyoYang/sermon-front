import React from 'react';
import styled from 'styled-components';
import AccountTag from '../../components/AccountTag/AccountTag';
import BoardLayout, { Content, Header, MainContent, SubContent } from '../../components/BoardLayout';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import mainLogo from '../../assets/image/mainhalf.png';
import QuestionDetail from '../../components/QuestionDetail';

import { useParams } from "react-router-dom";
import QuestionSearchTag from '../../components/QuestionSearchTag';


const QuestionDetailPage:React.FC = () => {
    
    return (
        <BoardLayout>
            <Header>
               
            </Header>
            <Content>
                <MainContent>
                    <Page>
                        <PageHeader icon={mainLogo} title="고민 상담" subtitle="고민을 듣고 답해주세요" />
                        <PageContent>
                            <QuestionDetail/>

                        </PageContent>
                    </Page>
                </MainContent>
                <SubContent>
                    <QuestionSearchTag />
                    <AccountTag />
                </SubContent>
            </Content>
        </BoardLayout>
        )
    
}
    


export default QuestionDetailPage;