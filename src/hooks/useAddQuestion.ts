import React, {useState} from 'react';

import axios from 'axios';
import {postOption} from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';
import useQuestions from './useQuestions';



const useAddQuestion = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [hashTags, setHashTags] = useState<string>("");

    const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
    const onSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {setContent(e.target.value);}
    const onSetHashTags = (e: React.ChangeEvent<HTMLInputElement>) => {setHashTags(e.target.value);}

    const {token} = useJwt();
    const {isLoggedIn} = useIsLoggedIn();

    const showAlert = useSimpleAlert();

    const {handleClose} = useSimpleActionModal();

    const {refreshQuestions} = useQuestions();

    const onAddQuestion = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            const response = await axios(postOption("/board/question", {
                title: title,
                content: content,
                hashTags: hashTags
            }, token));

            handleClose();
            showAlert("알림", "고민을 성공적으로 입력했습니다.");
            refreshQuestions();
            
        }catch(e){
            console.log(e);
            
            showAlert("알림", "입력에 실패했습니다.");
        }
    }



    return {title, content, hashTags, setHashTags,  onSetTitle, onSetContent,onSetHashTags, onAddQuestion}
}


export default useAddQuestion;