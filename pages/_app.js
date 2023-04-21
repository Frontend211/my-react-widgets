import Nav from '../components/Nav';
import '../style/app.sass';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <header>
      <Nav />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer>
    </footer>
  </>;
}

