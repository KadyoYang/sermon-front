import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {getOption, postOption} from '../utils/axiosOptions';
import { AnswerType } from '../models/models';
import useSimpleAlert from './useSimpleAlert';



const useGetAnswerList = () => {
    const[answers, setAnswers] = useState<AnswerType[]>();

    const showAlert = useSimpleAlert();
    const fetchAnswerList = async(questionId:number) => {
        try{
            const response = await axios(getOption("/board/question/"+questionId+"/answer", {},""));
            const data:AnswerType[] = response.data;
            setAnswers(data);
        }catch(e){
            console.log(e);
            showAlert("알림", "답변을 가져오는데 실패함");
        }
    }


    return {answers, fetchAnswerList};
}


export default useGetAnswerList;