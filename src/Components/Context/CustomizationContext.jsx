// Create a new context
import React, { createContext, useContext, useState } from 'react';

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [userSelectedOption, setUserSelectedOption] = useState('');
    const [data,setData] = useState(0)
    const [caldata, setCalData] = useState(1000); // Initial value set to 1000
    const [selectedOptionTiming, setSelectedOptionTiming] = useState('');
    const [selectedTimings, setSelectedTimings] = useState('');

    const [isLoggedIn,setIsLoggedIn]=useState(false);

    return (
        <CustomizationContext.Provider value={{isLoggedIn,setIsLoggedIn, selectedOptionTiming,setSelectedOptionTiming,selectedTimings,setSelectedTimings,selectedOption, setSelectedOption,userSelectedOption,setUserSelectedOption,data,setData,caldata,setCalData }}>
            {children}
        </CustomizationContext.Provider>
    );
};

export const useCustomizationContext = () => useContext(CustomizationContext);
