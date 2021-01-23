import {combineReducers} from 'redux';
import question from './question';


const rootReducer = combineReducers({
    question
});

export default rootReducer;
export type RootStateType = ReturnType<typeof rootReducer>