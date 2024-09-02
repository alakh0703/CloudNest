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
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Contact from './components/Contact';
import DCC from './components/DCC';
import DataCenter from './components/DataCenter';
import CloudInfra from './components/CloudInfra';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:'/about',
    element: <AboutUs />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:"contact",
    element:<Contact />
  },
  {
    path:"dc-cloud",
    element: <DCC />
  },
  {
    path: "cloud-infra",
    element: <CloudInfra  />
  },
  {
    path: "medc",
    element: <DataCenter/>
  }
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
