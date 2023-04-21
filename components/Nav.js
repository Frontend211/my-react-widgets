import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.sass';

const routes = [
  {name:'Home',path:'/'},
  {name:'Calendar demo',path:'/calendar-demo'},
  {name:'Drag & Drop demo',path:'/dnd-demo'},
];


export default function Nav() {
  const router = useRouter();
  return <nav className={styles.navigation}>
    <ul>
      {routes.map(({name,path})=>
        <li key={name} className={router.pathname === path ? styles.active : ''}><Link href={path}>{name}</Link></li>
      )}
    </ul>
  </nav>;
}