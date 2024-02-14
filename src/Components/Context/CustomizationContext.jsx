// Create a new context
import React, { createContext, useContext, useState } from 'react';

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [userSelectedOption, setUserSelectedOption] = useState('');



    return (
        <CustomizationContext.Provider value={{ selectedOption, setSelectedOption, selectedGender, setSelectedGender,userSelectedOption,setUserSelectedOption }}>
            {children}
        </CustomizationContext.Provider>
    );
};

export const useCustomizationContext = () => useContext(CustomizationContext);
