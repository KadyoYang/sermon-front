import React, {useState} from 'react';

import axios from 'axios';
import {getOption} from '../utils/axiosOptions';


const useHashTagCandidates = () => {
    const [candidates, setCandidates] = useState<string[]>([]);

    const onFetchHashTagCandidates = async(letter:string) => {
        try{
            const response = await axios(getOption("/board/hashtag",{
                letter:letter,
            },""));
            const data:string[] = response.data;

            setCandidates(data);   
        }catch(e){
            console.log(e);
            setCandidates([]);
        }
    }
    

    return {candidates, onFetchHashTagCandidates, setCandidates}
}


export default useHashTagCandidates;