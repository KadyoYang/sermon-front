import React, {useContext, useState, useEffect} from 'react';

import useJwt from './useJwt';
import useIsLoggedIn from './useIsLoggedIn';
import { parseJwt } from '../utils/jwtTool';


const useMyAccountInfo = () => {
    const {token} = useJwt();
    const {isLoggedIn} = useIsLoggedIn();

    const [id, setId] = useState<number>(-1);
    const [nickname, setNickname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");


    useEffect(()=>{
        if(isLoggedIn){
            const parsedJwt = parseJwt(token);
            setId(parsedJwt.id);
            setNickname(parsedJwt.nickname);
            setEmail(parsedJwt.email);
            setRole(parsedJwt.role);
        }
    }, [isLoggedIn])

    return {id, nickname, email, role};
}

export default useMyAccountInfo;
