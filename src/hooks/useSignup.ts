import React, {useState} from 'react';
import useSimpleAlert from './useSimpleAlert';
import axios from 'axios';
import {postOption} from '../utils/axiosOptions';



const useSignup = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");

    const onSetEmail = (e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value);}
    const onSetPassword = (e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);}
    const onSetNickname = (e:React.ChangeEvent<HTMLInputElement>) => {setNickname(e.target.value);}

    const showAlert = useSimpleAlert();


    const onSignup = async() => {
        try{
            const response = await axios(postOption("/user/signup", {
                email: email,
                password: password,
                nickname: nickname
            }, ""));
            showAlert("알림", "회원가입에 성공했습니다");
        }catch(e){
            console.log(e);
            showAlert("알림", "회원가입에 실패했습니다");
        }
    }

    return {email, password, nickname, onSetEmail, onSetPassword, onSetNickname, onSignup};

}

export default useSignup;