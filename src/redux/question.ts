import {QuestionType, PagingType} from '../models';

// type
const SET_QUESTION_LIST = 'question/SET_QUESTION_LIST';
const ADD_QUESTION_LIST = 'question/ADD_QUESTION_LIST';
const SET_PAGING = 'question/SET_PAGING';
const INC_PAGING_NUMBER = 'question/INC_PAGING_NUMBER';

// action type
interface SetQuestionActionType{
    type: typeof SET_QUESTION_LIST
    questions: QuestionType[]
}
// 액션 객체 생성 함수
export const setQuestions = (questions:QuestionType[]):SetQuestionActionType => ({
    type : SET_QUESTION_LIST,
    questions: questions
});

interface AddQuestionActionType{
    type: typeof ADD_QUESTION_LIST
    questions: QuestionType[]
}
export const addQuestions = (questions:QuestionType[]):AddQuestionActionType => ({
    type: ADD_QUESTION_LIST,
    questions: questions
})

interface SetPagingType{
    type: typeof SET_PAGING
    paging: PagingType
}
export const setPaging = (paging:PagingType):SetPagingType => ({
    type: SET_PAGING,
    paging: paging
})

interface IncPagingNumberType{
    type: typeof INC_PAGING_NUMBER
}
export const incPagingNumber = ():IncPagingNumberType => ({
    type: INC_PAGING_NUMBER
})


type ActionTypes = SetQuestionActionType | AddQuestionActionType | SetPagingType | IncPagingNumberType


interface QuestionStateType{
    questions: QuestionType[]
    paging: PagingType
}
// 초기상태
const initialState:QuestionStateType = {
    questions: [{id:0, title:"", content:"", createdDate:"", accountId:0, nickname:"", status:"", answersSize:0, viewCount:0}],
    paging: {pageNumber:1, pageSize:20}
}



// 리듀서
export default function question(state=initialState, action:ActionTypes):QuestionStateType{
    switch(action.type){
        case SET_QUESTION_LIST:
            return{
                ...state,
                questions: action.questions
            }
        case ADD_QUESTION_LIST:
            return{
                ...state,
                questions: [...state.questions, ...action.questions]
            }
        case SET_PAGING:
            return{
                ...state,
                paging: action.paging
            }
        case INC_PAGING_NUMBER:
            return{
                ...state,
                paging: {pageNumber : state.paging.pageNumber + 1, pageSize: state.paging.pageSize}
            }
        default:
            return state
    }
}
