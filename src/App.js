import React from "react";
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App =()=>{
  return(
      <BrowserRouter>
        <MainRoutes/>
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;