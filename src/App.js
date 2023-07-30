import { useState } from 'react';
import './App.css'
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';

function App() {
  const [bmi,setbmi]=useState("")
  const [bmiType,setbmiType]=useState("")

  return (
    <div>
      <Form/>
      <BmiScore bmiNo={bmi} bmiName={bmiType}/>
      <BmiList/>
    </div>
  );
}

export default App;
