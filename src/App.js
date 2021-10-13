import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';



// let name="Raj";
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode enable or not
 
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = ()=>{
    if(mode =='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode has been Enabled',"success");
      document.title=`TextUtil's- Dark Mode`;
      // setInterval(() => {
        
      //   document.title=`TextUtils is amazing`;
      // }, 2000);
      // setInterval(() => {
        
      //   document.title=`Install it TextUtils `;
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been Enabled',"success");
      document.title=`TextUtil's- Light Mode`;



    }
  }
  return (
    <>
<Navbar title="TestUtil's" mode={mode} aboutText="About-Us"  contact="contact-Us" toggleMode={toggleMode}/>
<Alert  alert={alert} />
<div className="container my-5">
<TextForm heading="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert}/>

{/* <About/> */}
</div>
    </>
  ); 
}

export default App;
