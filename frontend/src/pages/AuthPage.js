import React from 'react';
import { useParams } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
    const { mode } = useParams();

    return (
        <div>
            {mode === 'login' ? <Login /> : <Signup />}
        </div>
    );
};

export default AuthPage;