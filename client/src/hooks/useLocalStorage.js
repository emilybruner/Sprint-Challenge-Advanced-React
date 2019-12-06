import { useState } from 'react';


//set up state property
//capture the values
//if local data use that, else use initial data
//update localStorage when needed
//Don't forget to parse data from localStorage and stringify new data getting stored
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //what is called from cb will be the storedValue
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}