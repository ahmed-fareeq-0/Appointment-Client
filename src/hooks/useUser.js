import { useState } from "react";

export const registerHook = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return {
        name,
        email,
        phone,
        password,
        confirmPassword,
        setName,
        setEmail,
        setPhone,
        setPassword,
        setConfirmPassword,
    }
}