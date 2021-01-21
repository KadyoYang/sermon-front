import React, {useContext} from 'react';

import {Context} from '../contexts/AccountStatusProvider';



const useJwt = () => {
    const {token, onSetToken} = useContext(Context);
    return {token, onSetToken};
}

export default useJwt;
