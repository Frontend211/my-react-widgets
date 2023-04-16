import { useState } from 'react';
import style from './Draggable.module.css';

export default function Draggable({ id, children }) {
  const 
    [drugged, setDrugged] = useState(false);
  return (
    <div
      drag-id={id}
      draggable="true"
      className={drugged ? style.drugged : ''}
      onDragStart={evt => {
        evt.dataTransfer.setData('text/plain', id);
        setDrugged(true);
        // setCurrent(val);
      }}
      onDragEnd={_ => setDrugged(false)}
    >
      {children}
    </div >
  );


}