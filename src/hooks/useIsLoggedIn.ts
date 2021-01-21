import React, {useContext} from 'react';

import {Context} from '../contexts/AccountStatusProvider';



const useIsLoggedIn = () => {
    const {isLoggedIn, onSetIsLoggedIn} = useContext(Context);
    return {isLoggedIn, onSetIsLoggedIn};
}

export default useIsLoggedIn
