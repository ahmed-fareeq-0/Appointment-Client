import { useState } from 'react';

const useSettings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [fontSize, setFontSize] = useState(16);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const changeFontSize = (newFontSize) => {
        setFontSize(newFontSize);
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled((prev) => !prev);
    };

    return {
        notificationsEnabled,
        setNotificationsEnabled,
        handleNotificationsToggle,
        theme,
        toggleTheme,
        language,
        changeLanguage,
        fontSize,
        changeFontSize,
    };
};

export default useSettings;
