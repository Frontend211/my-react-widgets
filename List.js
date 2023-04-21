import Item from './Item';

export default function List({ list, setList }) {
  const onClick = ({ target }) => {
    const
      id = +target.closest('li')?.dataset?.id;
    if (!id) return;

    switch (true) {
      case target.matches('input[type=checkbox'):
        // list[index].checked = !list[index].checked; setList([...list])
        setList(list.map(el => el.id !== id ? el : el.invertChecked())); // метод class ListItem
        return;
      case target.matches('button'):
        // list.splice(index,1); setList([...list])  
        setList(list.filter(el => el.id !== id));
        return;
    }
  };

  return <fieldset>
    <legend>&lt;List / &gt;</legend>
    <ul className="to-do" onClick={onClick}>
      {list.map(item => <Item key={item.id} id={item.id} text={item.text} checked={item.checked} />)}
    </ul>
  </fieldset>;
}