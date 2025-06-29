import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import ContactMe from './Components/ContactMe.jsx';
import Projects from './Components/Projects.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: '/aboutMe', 
        Component: AboutMe 
      },
      { path: '/skills', 
        Component: Skills
      },
      { path: '/education', 
        Component: Education
      },
      { path: '/projects', 
        Component: Projects
      },
      { path: '/contactme', 
        Component: ContactMe
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
