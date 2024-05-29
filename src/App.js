import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Bgadvisors from './components/Bgadvisors';
import Spotify from './components/Spotify';
import Swiggy from "./components/Swiggy";
import Youtube from "./components/Youtube"
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Body from "./components/Body"
import Head from "./components/Head"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NickHandymanServices from './components/NickHandymanServices';
const appRouter = createBrowserRouter([
  {
  path : "/", 
  element : <Body/>,
  },
    {
      path:"/nicks-handyman-services",
      element : <NickHandymanServices/>
    },
    {
      path:"/bgadvisors",
      element : <Bgadvisors/>
    },
    {
      path:"/spotify",
      element : <Spotify/>
    },
    {
      path:"/swiggy",
      element : <Swiggy/>
    },
    {
      path:"/youtube",
      element : <Youtube/>
    },
    {
      path:"/skills",
      element : <Skills/>
    }
  
]
)



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <div>
    <RouterProvider router = {appRouter}/>
    </div>
  );
}

export default App;







