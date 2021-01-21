import axios from 'axios';
import React, {useState} from 'react';
import axiosOption from '../utils/axiosOptions';
import {parseJwt} from '../utils/jwtTool';
import useIsLoggedIn from './useIsLoggedIn';
import useJwt from './useJwt';
import useSimpleAlert from './useSimpleAlert';



const useLogin = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value);}
    const onSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);}

    const {onSetToken} = useJwt();
    const {onSetIsLoggedIn} = useIsLoggedIn();

    const showAlert = useSimpleAlert();

    const onLogin = async() => {
        try{
            const response = await axios(axiosOption("/user/login", "post", {
                email: email,
                password: password
            }, ""));
            // response 파싱 후 
            // AccountStatusContext에 저장 
            const jwtWithBearer = response.headers.authorization;
            onSetToken(jwtWithBearer);
            onSetIsLoggedIn(true);
        }catch(e){
            console.log(e);
            showAlert("알림", "로그인에 실패했습니다");
        }
    }



    return {email, password, onSetEmail, onSetPassword, onLogin}
}


export default useLogin;