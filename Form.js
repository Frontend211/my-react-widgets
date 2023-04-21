import { useState } from 'react';
// import TestRender from "./TestRender";

export default function Form({addNewTask}){
  const [value,setValue]=useState('---');
  return <fieldset>
    <legend>&lt;Form / &gt;</legend>
    <input value={value} onInput={evt=>setValue(evt.target.value)} />
    <button onClick={_=>{addNewTask(value);setValue('');}}>Add</button>
    {/* <TestRender /> */}
  </fieldset>;
}