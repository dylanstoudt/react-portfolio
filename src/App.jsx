// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'
<link rel="stylesheet" href="./assets/social-share-kit-master/dist/css/social-share-kit.css" type="text/css"></link>


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;