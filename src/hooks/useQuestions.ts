import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { getOption } from '../utils/axiosOptions';
import {RootStateType} from '../redux'
import {QuestionType} from '../models'
import useSimpleAlert from './useSimpleAlert';
import { setPaging, setQuestions } from '../redux/question';

const useQuestions = () => {
    const questions:QuestionType[] = useSelector((state:RootStateType) => state.question.questions);
    const pagingNumber = useSelector((state:RootStateType) => state.question.paging.pageNumber);
    const pagingSize = useSelector((state:RootStateType) => state.question.paging.pageSize);
    const showAlert = useSimpleAlert();
    const dispatch = useDispatch();

    const fetchQuestionList = async() => {
        try{
            const response = await axios(getOption("/board/question", {
                pageNumber: pagingNumber,
                pageSize: pagingSize
            }, ""));
            const data:QuestionType[] = response.data;
            dispatch(setQuestions(data));

        }catch(e){
            showAlert("알림", "고민리스트 가져오기에 실패함");
            console.log(e);
        }
    }

    const refreshQuestions = () => {
        dispatch(setPaging({pageNumber:1, pageSize:20}))
        fetchQuestionList();
    }

    useEffect(()=>{
        fetchQuestionList();
    }, []);

    return {questions, refreshQuestions}

}


export default useQuestions;