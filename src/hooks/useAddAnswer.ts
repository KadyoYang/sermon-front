import React, {useState} from 'react';

import axios from 'axios';
import {postOption} from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';

import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';


const useAddAnswer = (questionId:number, callback:()=>void) => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    

    const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
    const onSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {setContent(e.target.value);}



    const {token} = useJwt();
    const {isLoggedIn} = useIsLoggedIn();

    const showAlert = useSimpleAlert();
    const {handleClose} = useSimpleActionModal();


    const onAddAnswer = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            const response = await axios(postOption("/board/question/"+questionId+"/answer", {
                title: title,
                content: content,
            }, token));

            handleClose();
            showAlert("알림", "답변을 성공적으로 입력했습니다.");
            callback();
            
        }catch(e){
            console.log(e);
            
            showAlert("알림", "입력에 실패했습니다.");
        }
    }

    return {title, onSetTitle, content, onSetContent, onAddAnswer};

}

export default useAddAnswer;