import React, { useState } from 'react';

// our theme singleton
export const ThemeContext = React.createContext();

function Theme ({children}) {
 
  const[mode,setMode]=useState('light');
     
  
  
 const values= {
      mode,
      setMode,
    }
  

    return (
      <ThemeContext.Provider value={values}>
        {children}
      </ThemeContext.Provider>
    )
  
}

export default Theme;
