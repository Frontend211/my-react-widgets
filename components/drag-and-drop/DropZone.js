import { useState } from 'react';
import styles from './DropZone.module.css';

export default function DropZone({ onDrop, checkDrop, dropZoneId, children }) {
  const [dragOver, setDragOver] = useState(false);

  return <div
    className={styles['drop-zone'] +' '+ (dragOver ? styles['drag-over']:'') }
    onDragOver={evt => {    
      // console.log('onDragOver');
      if (checkDrop && !checkDrop(dropZoneId,evt.dataTransfer.getData('text/plain'))) return;
      setDragOver(true);
      evt.preventDefault(); // важно!!
    }}
    // onDragEnd={(evt) => setClass("")}
    onDragLeave={_ => setDragOver(false)}
    onDrop={evt => {
      setDragOver(false);
      // console.log('onDrop id=',evt.dataTransfer.getData('text/plain'));
      onDrop(dropZoneId,evt.dataTransfer.getData('text/plain'),evt);
    }}
  >
    {children}
  </div>;
}
