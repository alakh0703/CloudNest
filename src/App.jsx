import logo from './logo.svg';
import './App.css';
import WrapperContainer from './utils/WrapperContainer';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
]);

function App() {
  return (
    <div className='app'>
<Navbar />
    {/* <WrapperContainer> */}
      <RouterProvider router={router} />

    {/* </WrapperContainer> */}
    <Footer />
    </div>

  );
}

export default App;
