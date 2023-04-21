import { useCallback, useState } from 'react';
import Draggable from '../components/drag-and-drop/Draggable';
import DropZone from '../components/drag-and-drop/DropZone';
import styles from '../style/dnd-demo.module.sass';

function newElemId() {
  return Math.random;
}

export default function DNDDemoPage() {
  const
    [draggableSet, setDraggableSet] = useState(
      [11, 22, 33]
        .map(n => ({
          id: n,
          component: <Draggable id={n} key={n}><div key={n} className={styles.round}>{n}</div></Draggable>,
          parentId: 0
        })
        )),
    onDrop = useCallback((dzId, elId, { shiftKey }) => {
      let
        elem = draggableSet.find(el => +elId === +el.id);
      if (shiftKey) {
        elem = { ...elem };
        elem.id = newElemId();
        draggableSet.push(elem);
      }
      // console.log('Callback', dzId, elId, elem);
      elem.parentId = +dzId;

      setDraggableSet([...draggableSet]);
    }, []),

    checkDrop = useCallback((dzId, elId) => {
      console.log('checkDrop', dzId, elId, typeof elId);
      draggableSet.find(el => +elId === +el.id)?.parentId !== +dzId
    }, []);



  return <div>
    <h1>Draggable and DropZone usage demo</h1>

    <div className={styles.container}>
      {[0, 1, 2, 3].map(i =>
        <DropZone key={i} dropZoneId={i} onDrop={onDrop} ><div className={styles.square}>{draggableSet.filter(x => i === x.parentId).map(el => el.component)}</div></DropZone>
      )}
      {/* <DropZone dropZoneId="0" onDrop={onDrop} ><div className="square">{draggableSet.filter(x => 0 === x.parentId).map(el => el.component)}</div></DropZone>
    <DropZone dropZoneId="1" onDrop={onDrop} ><div className="square">{draggableSet.filter(x => 1 === x.parentId).map(el => el.component)}</div></DropZone> */}

      <DropZone dropZoneId="trash"
        {...{} /* onDrop={(_, elId)=>setDraggableSet(draggableSet.filter(el => +elId !== +el.id)) } */}
        onDrop={onDrop}
      ><div className={styles.trash}></div></DropZone>
    </div>
  </div>;
}