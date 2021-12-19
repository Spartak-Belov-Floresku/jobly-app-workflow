import { useState, useEffect } from "react";

const useStorage = (key) => {

    const initialValue = localStorage.getItem(key) || null;
    const [item, setItem] = useState(initialValue);
  
    useEffect(function setKeyInLocalStorage() {
  
      (item === null)?
        localStorage.removeItem(key)
        : 
        localStorage.setItem(key, item);
      
    }, [key, item]);
  
    return [item, setItem];

  }
  
  export default useStorage;