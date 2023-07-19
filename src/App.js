
import './App.css';
import Navbar from '../src/components/Navbar.js'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState( 'light');//whether dark mode enabled or not


  const [alert,setAlert] = useState(null)


   const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
   }

const toggleMode =(cls)=>{
removeClassList()
  console.log(cls);
  document.body.classList.add('bg-'+ cls)

  if(mode === 'light'){
    setMode('dark');
   document.body.style.backgroundColor = 'rgb(12 40 50)';
   showAlert("Dark mode has been enabled.","success")
   document.body.style.color = 'white';
   document.title = 'TextUtils- Dark Mode';
  //  setInterval(() => {
  //   document.title = 'TextUtils is amazing mode'
  //  }, 2000);

  //  setInterval(() => {
  //   document.title = ' Install TextUtils Now '
  //  },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled.","success")
    document.body.style.color = 'black';
    document.title = 'TextUtils- Light Mode';
  
  }
}

const removeClassList =(cls)=>{
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-light');
}

  // const toggleText = ()=>{
  //   if(switchText=== 'Enable Dark Mode'){
  //     setSwitchText('Enable light Mode')
  //   }
  //   else{
  //     setSwitchText('Enable dark Mode')
  //   }
  // }

    
  
  return (
   <>
 {/* <Router> */}
 <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm  showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          {/* <Route path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}/> */}

        {/* </Routes> */}
   </div>
 {/* </Router> */}
    
   </>

  );
}

export default App;

