import { useState } from 'react';

const useUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const [usernameSignIn, setUsernameSignIn] = useState('');
    const [passwordSignIn, setPasswordSignIn] = useState('');

    const handleRegister = () => {
        console.log('Username:', username);
        console.log('email:', email);
        console.log('phone:', phone);
        console.log('password:', password);
        console.log('confirmPassword:', confirmPassword);
    };

    const handleLogin = () => {
        console.log('Username:', usernameSignIn);
        console.log('Password:', passwordSignIn);
        setUsernameSignIn("")
        setPasswordSignIn("")
    };

    return {
        username,
        email,
        phone,
        specialty,
        password,
        confirmPassword,
        setUsername,
        setEmail,
        setPhone,
        setSpecialty,
        setPassword,
        setconfirmPassword,
        handleRegister,

        usernameSignIn,
        passwordSignIn,
        setUsernameSignIn,
        setPasswordSignIn,
        handleLogin
    };
};

export default useUser;
