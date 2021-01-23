import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {} from '../utils/axiosOptions';
import {RootStateType} from '../redux'
import {QuestionType} from '../models'

const useQuestions = () => {
    const questions:QuestionType[] = useSelector((state:RootStateType) => state.question.questions);
    const pagingNumber = useSelector((state:RootStateType) => state.question.paging.pageNumber);
    const pagingSize = useSelector((state:RootStateType) => state.question.paging.pageSize);

    const testData:QuestionType[] = [
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
        {
            id:1,
            title:"title",
            content:"uhaha",
            date: "20201222",
            accountId:1,
            status: "undefined",
            answersSize: 4
        },
    ]
    
    return {questions}

}


export default useQuestions;