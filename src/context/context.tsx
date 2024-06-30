import React, { createContext, useState, ReactNode, FC } from 'react';

interface MyContextProps {
  showDiv: boolean;
  setShowDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <MyContext.Provider value={{ showDiv, setShowDiv }}>
      {children}
    </MyContext.Provider>
  );
};
