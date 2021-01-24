import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { QuestionType } from '../models';
import { postOption, putOption } from '../utils/axiosOptions';
import useGetQuestion from './useGetQuestion';
import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';



const useModQuestion = (question:QuestionType, onFetchQuestion : (questionId: number) => Promise<void>) => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();

    const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
    const onSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {setContent(e.target.value);}

    const {token} = useJwt();
    const {isLoggedIn} = useIsLoggedIn();


    const showAlert = useSimpleAlert();

    const {handleClose} = useSimpleActionModal();


    useEffect(()=>{   
        setTitle(question.title);
        setContent(question.content);  
    }, [])





    const onModQuestion = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            await axios(putOption("/board/question/"+question.id, {
                title: title,
                content: content
            }, token));

            handleClose();
            showAlert("알림", "수정에 성공했습니다.");
            onFetchQuestion(question.id);
        }catch(e){
            console.log(e);
            showAlert("알림", "수정에 실패했습니다.");
        }
    }

    return {title, content, onSetTitle, onSetContent, onModQuestion}
}

export default useModQuestion;