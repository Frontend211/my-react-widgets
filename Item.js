import { memo } from 'react';

export default memo(function Item({ text, checked, id }) {
  console.log('Item render', text);
  return <li data-id={id}>
    <input type="checkbox" checked={checked} readOnly />
    <span>{text}</span>
    <button>X</button>
  </li>;
});