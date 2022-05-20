import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStotangeItem = localStorage.getItem(itemName);
          let parceItem;
          if (!localStotangeItem) {
            //puedo ver si esta vacio e null entre otros
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parceItem = initialValue;
          } else {
            parceItem = JSON.parse(localStotangeItem);
          }
          setItem(parceItem);
          setLoading(false)
        } catch (error) {
          setError(error)
  
        }
      }, 1000);
    });
    const saveItem = (newItem) => {
      try {
        const stringifiTodo = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiTodo);
        setItem(newItem);
      } catch (error) {
        setError(error)
      }
    };
  
    return { item, saveItem, loading, error }; // si enviamos dos estados lo podemos envia con [] si es mas 2  es {}
  }

export {useLocalStorage};