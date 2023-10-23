import { useState } from 'react';

const useSettings = () => {
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


    return {
        theme,
        toggleTheme,
        language,
        changeLanguage,
        fontSize,
        changeFontSize,
    };
};

export default useSettings;
