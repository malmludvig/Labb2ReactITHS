import React, { createContext, useContext } from 'react';

// Skapa default context-värde
const MyContext = createContext('Hello, World!');

const ChildComponent = () => {
  // Använd context-värdet
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

const UseContextParentComponent = () => {
  return (
    // Skicka med context-värdet
    <MyContext.Provider value="Hello from the useContext of the parent component!">
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default UseContextParentComponent;