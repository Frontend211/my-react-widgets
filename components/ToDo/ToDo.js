import Form from '../components/Form';
import List from '../components/List';
import { ListItem } from '../imports/ListItem';
import { useState } from 'react';

export default function ToDo() {
  const [list, setList] = useState([]);
  return <fieldset>
    <legend>&lt;ToDo / &gt;</legend>
    <Form addNewTask={str => setList([...list, new ListItem(str)])} />
    <List list={list} setList={setList} />
  </fieldset>;
}
