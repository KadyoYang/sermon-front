import React, {createContext, useEffect, useState} from 'react';
import useInterval from '../../hooks/useInterval';
import axios from 'axios';
import {getOption} from '../../utils/axiosOptions';
import { setTokenSourceMapRange } from 'typescript';
import useSimpleAlert from '../../hooks/useSimpleAlert';


export interface AccountStatusContext{
    isLoggedIn: boolean,
    token: string,
    onSetIsLoggedIn: (isLoggedIn:boolean) => void,
    onSetToken: (token:string)=>void,
}

export const Context = createContext<AccountStatusContext>({
    isLoggedIn: false,
    token: "",
    onSetIsLoggedIn: () => {},
    onSetToken: ()=>{},
})


const AccountStatusProvider: React.FC = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");

    const onSetIsLoggedIn = (isLoggedIn:boolean) => {setIsLoggedIn(isLoggedIn);}
    const onSetToken = (token:string) => {setToken(token);}

    const showAlert = useSimpleAlert();
    useInterval(async() => {
        if(isLoggedIn){
            try{      
             const response = await axios(getOption("/user/auth", {}, token));
             console.log("tick");
            }catch(e){
                console.log(e);
                
                setIsLoggedIn(false);
                setToken("");
                showAlert("알림", "로그인 세션이 끊어졌습니다");
                // alert("로그인 세션이 끊어졌습니다.")
            }
        }
        console.log("tock");
        console.log(isLoggedIn);
    }, 5000);



    return <Context.Provider value={{isLoggedIn, token, onSetToken, onSetIsLoggedIn}}>{children}</Context.Provider>
}


export default AccountStatusProvider;