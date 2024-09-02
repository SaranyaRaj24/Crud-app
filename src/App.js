import React from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Create from "./Components/Create"
import Read from "./Components/Read";
import Update from "./Components/Update";
import Cre from "./Components/Cre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/Cre" element={<Cre />}></Route>
        <Route path="/Read/:id" element={<Read />}></Route>
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
