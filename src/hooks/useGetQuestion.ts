import React, {useState} from 'react';

import axios from 'axios';
import {getOption} from '../utils/axiosOptions';


import useSimpleAlert from './useSimpleAlert';
import { QuestionType } from '../models';



const useGetQuestion = () => {
    const [question, setQuestion] = useState<QuestionType>();

    const showAlert = useSimpleAlert();

    const onFetchQuestion = async(questionId:number) => {
        try{
            const response = await axios(getOption("/board/question/{questionId}",{},""));
            const data:QuestionType = response.data

            setQuestion(data);   
        }catch(e){
            console.log(e);
            
            showAlert("알림", "고민 가져오기에 실패했습니다.");
        }
    }



    return {question, onFetchQuestion}
}


export default useGetQuestion;