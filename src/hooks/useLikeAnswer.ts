import axios from 'axios';
import React, {useState, useEffect} from 'react';

import { AnswerType } from '../models/models';
import { deleteOption, postOption, putOption } from '../utils/axiosOptions';

import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';



const useLikeAnswer = (answer:AnswerType, callback:()=>void) => {
    const showAlert = useSimpleAlert();
    const { isLoggedIn } = useIsLoggedIn();
    const {token} = useJwt();

    const onLikeAnswer = async() => {
        try{
            await axios(postOption("/board/question/"+answer.accountId+"/answer/"+answer.id, {
            },token));
            callback();
        }catch(e){
            console.log(e);
            showAlert("알림", "좋아요에 실패했습니다.");
        }
    }

    return {onLikeAnswer}
}

export default useLikeAnswer;