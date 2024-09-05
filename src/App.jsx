import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs';
import CloudInfra from './components/CloudInfra';
import Contact from './components/Contact';
import DCC from './components/DCC';
import DataCenter from './components/DataCenter';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import LoadingAnimation from "./utils/LoadingAnimation";




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
       <RouterProvider router={router} />

     <Footer />
    </div>

  );
}

export default App;
