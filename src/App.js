import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Rotas} from "./routes";


function App() {
    return (
      <BrowserRouter>
          <Header />
          <Rotas />
          <Footer />
      </BrowserRouter>    );
    
    
  }
  export default App