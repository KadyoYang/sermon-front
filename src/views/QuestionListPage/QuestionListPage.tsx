import React from 'react';
import BoardLayout, {Header, Content, MainContent, SubContent} from '../../components/BoardLayout';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import mainLogo from '../../assets/image/mainhalf.png';
import QuestionList from '../../components/QuestionList';
import AccountTag from '../../components/AccountTag/AccountTag';



const QuestionListPage:React.FC = () => {

return (
    <BoardLayout>
        <Header>

        </Header>
        <Content>
            <MainContent>
                <Page>
                    <PageHeader icon={mainLogo} title="고민 목록" subtitle="고민을 들어봅시다" />
                    <PageContent>
                        <QuestionList />
                    </PageContent>
                </Page>
            </MainContent>
            <SubContent>
                <AccountTag />
            </SubContent>
        </Content>
    </BoardLayout>
    )

}


export default QuestionListPage;