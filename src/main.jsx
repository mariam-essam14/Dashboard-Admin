import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './Pages/Dashboard/Dashboard';
import Team from './Pages/Team/Team';
import Contacts from './Pages/Contacts/Contacts';
import Invoices from './Pages/Invoices/Invoices';
import Profile from './Pages/Profile/Profile';
import Calender from './Pages/Calender/Calender';
import FAQ from './Pages/FAQ/FAQ';
import Bar from './Pages/Bar/Bar';
import Pie from './Pages/Pie/Pie';
import Line from './Pages/Line/Line';
import Geography from './Pages/Geography/Geography';
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Dashboard/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='/Dashboard/team' element={<Team />} />
      <Route path='/Dashboard/contacts' element={<Contacts />} />
      <Route path='/Dashboard/invoices' element={<Invoices />} /> 
      <Route path='/Dashboard/form' element={<Profile />} />
      <Route path='/Dashboard/calender' element={<Calender />} />
      <Route path='/Dashboard/faq' element={<FAQ />} />
      <Route path='/Dashboard/bar' element={<Bar />} />
      <Route path='/Dashboard/pie' element={<Pie />} />
      <Route path='/Dashboard/line' element={<Line />} />
      <Route path='/Dashboard/geography' element={<Geography />} />
      <Route path='*' element={<NotFound/>} />
     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
