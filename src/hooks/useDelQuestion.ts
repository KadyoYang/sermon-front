import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { QuestionType } from '../models';
import { deleteOption, postOption, putOption } from '../utils/axiosOptions';
import useGetQuestion from './useGetQuestion';
import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleActionModal from './useSimpleActionModal';
import useSimpleAlert from './useSimpleAlert';



const useDelQuestion = (question:QuestionType, callback:()=>void) => {
    const showAlert = useSimpleAlert();
    const { isLoggedIn } = useIsLoggedIn();
    const {token} = useJwt();
    const {handleClose} = useSimpleActionModal();

    const onDelQuestion = async() => {
        if(isLoggedIn == false){
            showAlert("알림", "먼저 로그인 해주세요");
        }
        try{
            await axios(deleteOption("/board/question/"+question.id, {
            }, token));

            handleClose();
            showAlert("알림", "삭제에 성공했습니다.");
            callback();
        }catch(e){
            console.log(e);
            showAlert("알림", "수정에 실패했습니다.");
        }
    }

    return {onDelQuestion}
}

export default useDelQuestion;