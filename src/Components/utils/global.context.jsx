import { createContext, useContext, useState} from "react";

const initialState = {theme: "light", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dentists, setDentists] = useState(initialState.data);
  const [theme, setTheme] = useState(initialState.theme);

  const value = {
    dentists,
    setDentists,
    theme,
    setTheme,
  };

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobalContext = () => useContext(ContextGlobal);