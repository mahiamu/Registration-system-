import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
  } from 'react';
  import reducer from './reducer';
  
  const initialState = {
    currentUser: null,
    openLogin: false,
    loading: false,
    alert: { open: false, severity: 'info', message: '' },
    profile: { open: false, file: null, photoURL: '' },
    images: [],
    users: [],
  };
  
  const Context = createContext(initialState);
  
  export const useValue = () => {
    return useContext(Context);
  };
  
  const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const containerRef = useRef();
    useEffect(() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        dispatch({ type: 'UPDATE_USER', payload: currentUser });
      }
    }, []);
    return (
      <Context.Provider value={{ state, dispatch, containerRef }}>
        {children}
      </Context.Provider>
    );
  };
  
  export default ContextProvider;