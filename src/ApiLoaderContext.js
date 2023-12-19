// ApiLoaderContext.js
import { createContext, useContext, useState } from 'react';

const ApiLoaderContext = createContext();

export const ApiLoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <ApiLoaderContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </ApiLoaderContext.Provider>
  );
};

export const useApiLoader = () => {
  return useContext(ApiLoaderContext);
};
