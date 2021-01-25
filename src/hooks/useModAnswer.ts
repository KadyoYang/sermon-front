import React, {useState} from 'react';

import axios from 'axios';
import {putOption} from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';

import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';
import { AnswerType } from '../models/models';


const useModAnswer = (answer:AnswerType, callback:()=>void) => {
    const [title, setTitle] = useState<string>(answer.title);
    const [content, setContent] = useState<string>(answer.content);

    const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
    const onSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {setContent(e.target.value);}
    
    const {token} = useJwt();
    const {isLoggedIn} = useIsLoggedIn();

    const showAlert = useSimpleAlert();
    const {handleClose} = useSimpleActionModal();


    const onModAnswer = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            const response = await axios(putOption("/board/question/"+answer.questionId+"/answer/"+answer.id, {
                title: title,
                content: content
            }, token));

            handleClose();
            showAlert("알림", "답변을 성공적으로 수정했습니다.");
            callback();
            
        }catch(e){
            console.log(e);
            
            showAlert("알림", "수정에 실패했습니다.");
        }
    }

    return {title, onSetTitle, content, onSetContent, onModAnswer};

}

export default useModAnswer;