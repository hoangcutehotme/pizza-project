import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [cart, setCart] = useState([
    {
      _id : 1,
      image:'http://thepizzacompany.vn/images/thumbs/000/0002702_mirinda-soda-kem-can_95.png',
      name:'Mirinda Soda Kem Lon',
      detail:'không sao',
      amount:2,
      price: 15000
    },
    {
      _id : 2,
      image:'http://thepizzacompany.vn/images/thumbs/000/0002216_shrimp-ctl_95.png',
      name:'Pizza Tôm Cocktail',
      detail:'không sao',
      amount:1,
      price: 200000
    },
  ]);

  const [userName, setUserName] = useState("")
  const [defaultContact, setDefaultContact] = useState({})

  return (
    <UserContext.Provider value={{cart, setCart, userName, setUserName, defaultContact, setDefaultContact}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
