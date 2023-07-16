// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // let name = "ammar";
  return (
    <>    
      {/* <Navbar title="MyReactApp" aboutText="About Text"/> */}
      {/* <Navbar/> */}
      <Navbar title="MyReactApp"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/> 
      </div>
    </>
  );
}

export default App;
