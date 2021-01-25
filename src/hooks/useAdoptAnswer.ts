import axios from 'axios';
import React, {useState, useEffect} from 'react';

import { AnswerType } from '../models/models';
import { deleteOption, postOption, putOption } from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';



const useAdoptAnswer = (answer:AnswerType, callback:()=>void) => {
    const showAlert = useSimpleAlert();
    const { isLoggedIn } = useIsLoggedIn();
    const {token} = useJwt();


    const onAdoptAnswer = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            await axios(postOption("/board/question/"+answer.questionId, {
                answerId:answer.id
            }, token));

            showAlert("알림", "답변을 채택했습니다.");
            callback();
        }catch(e){
            console.log(e);
            showAlert("알림", "채택에 실패했습니다.");
        }
    }

    return {onAdoptAnswer}
}

export default useAdoptAnswer;