
//import { use, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');//darkMode ek state variable hai jisme hum dark mode ke on/off hone ki information store kar rahe hain.
  //  setDarkMode ek function hai jiske through hum darkMode variable ki value ko update kar sakte hain. 
  // useState hook ke through hum darkMode variable ki initial value ko set kar rahe hain. 
  // Yaha hum darkMode variable ki initial value false set kar rahe hain.
  const [alert, setAlert] = useState(null);//alert ek state variable hai jisme hum alert ke message ko store kar rahe hain.
  // setAlert ek function hai jiske through hum alert variable ki value ko update kar sakte hain. 
  // useState hook ke through hum alert variable ki initial value ko set kar rahe hain. 
  // Yaha hum alert variable ki initial value null set kar rahe hain.

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")//dark mode on hone par body ke background color ko change kar rahe hain.
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")//dark mode off hone par body ke background color ko change kar rahe hain.
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;
{/* <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} /> */ }
{/* <About/> */ }
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */ }
{/*<Navbar/>*/ }
{/* <About/> */ } 