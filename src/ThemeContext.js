import React, { useState } from 'react'


export const StoreContext = React.createContext(null);

export default ({ children }) => {
    // các em đã vào nhà kho
   const [navBarAppear,setNavBarAppear]=useState(false)






    const store = {
        navBarAppear:[navBarAppear,setNavBarAppear]

    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};