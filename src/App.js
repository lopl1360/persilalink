import React, {useState} from 'react';
import './App.css';
import { GridLayout } from './component/GridLayout';
import 'typeface-roboto';
import {GetUniqueCode} from './Service/GetUniqueCode';

function App() {
  const [code, setCode] = useState(GetUniqueCode());
  console.log(process.env);
  return (
    <GridLayout code={code} setCode={setCode}/>
  );
}

export default App;
