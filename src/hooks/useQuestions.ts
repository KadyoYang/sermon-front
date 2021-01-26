import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { getOption } from '../utils/axiosOptions';
import {RootStateType} from '../redux'
import {QuestionType} from '../models'
import useSimpleAlert from './useSimpleAlert';
import { addQuestions, setPaging, setQuestions } from '../redux/question';

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
        dispatch(setPaging({pageNumber:1, pageSize:15}))
        fetchQuestionList();
    }
    /**
     * return : boolean
     * true means (there is more questions and fetched)
     * false means (there is no more questions)
     */
    const fetchMoreQuestionList = async() => {
        try{
            const lastIndex = questions[questions.length-1].id;
            const response = await axios(getOption("/board/question/more", {
                pageNumber: pagingNumber,
                pageSize: pagingSize,
                lastIndex: lastIndex
            }, ""));
            const data:QuestionType[] = response.data;
            dispatch(addQuestions(data));
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        if(questions.length < 2){
            fetchQuestionList();
        }
        
    }, []);

    return {questions, refreshQuestions, fetchMoreQuestionList}

}


export default useQuestions;