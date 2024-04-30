import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from './components/Loading';
import Notification from './components/Notification'
import Home from "./scenes/home";
import Login from "./scenes/user/Login";
import PageNotFound from "./scenes/protected/404Page";
import Sidebar from "./components/Sidebar";
import Admin from "./scenes/admin";
import Contact from "./scenes/contact";
import Faqs from "./scenes/FAQS";
import About from "./scenes/About";
import Stat from "./scenes/status";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
    <Sidebar />
    <main className="content">
    <Navbar setIsSidebar={setIsSidebar} />
    <Loading/>
    <Notification/>
    <Login />
    
    <Routes>
      <Route path="/" element={<Navigate to="/home" repalce />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/users" element={<Admin/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faq" element={<Faqs/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/status" element={<Stat/>}/>
      <Route path="/*" element={<PageNotFound />} />                  

    </Routes>            
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


/**/