// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message, type:type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeMode = () => {
    if (mode == "dark") {
      setMode("light"); 
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.", "success");
    }
    else {
      setMode("dark"); 
      document.body.style.backgroundColor = "rgb(16 33 57)";
      showAlert("Dark Mode is Enabled.", "success");
    }
  };

  return (
    <>    
      {/* <Navbar title="MyReactApp" aboutText="About Text"/> */}
      {/* <Navbar/> */}

      <Navbar title="MyReactApp" mode={mode} changeMode={changeMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
        <About/>
      </div>
    </>
  );
}

export default App;
