import axios from 'axios';
import React, {useState, useEffect} from 'react';

import { AnswerType } from '../models/models';
import { deleteOption, postOption, putOption } from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';



const useDelAnswer = (answer:AnswerType, callback:()=>void) => {
    const showAlert = useSimpleAlert();
    const { isLoggedIn } = useIsLoggedIn();
    const {token} = useJwt();


    const onDelAnswer = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            await axios(deleteOption("/board/question/"+answer.accountId+"/answer/"+answer.id, {
            }, token));

            showAlert("알림", "삭제에 성공했습니다.");
            callback();
        }catch(e){
            console.log(e);
            showAlert("알림", "삭제에 실패했습니다.");
        }
    }

    return {onDelAnswer}
}

export default useDelAnswer;