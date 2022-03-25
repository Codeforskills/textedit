// import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>setAlert(null),1500);
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled ","success")
     document.title= "TextEdit - Dark Mode"
    //  Dynamic Title
      // setInterval(()=>{ document.title="TextEdit is Free"},2000)
      // setInterval(()=>{ document.title="Install Now"},1500)
    }
    else
    {
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled ","success")
    document.title="TextEdit - Light Mode";
    
    }
  }
  return (
    <>
       <Router>
      <Navbar title="TextEdit" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <About /> */}
        <Routes>
          <Route path="/about" element={<About />}>
             {/* <About /> */}
          </Route>
          <Route path="/" element={<TextForm givealert={showAlert} heading="Enter the text" mode={mode}> </TextForm> }>
          {/* <TextForm givealert={showAlert} heading="Enter the text" mode={mode}> </TextForm>  */}
          </Route>
        </Routes>
        {/* <TextForm givealert={showAlert} heading="Enter the text" mode={mode}> </TextForm> */}
      </div>
      </Router>
    </>
  );
}

export default App;
