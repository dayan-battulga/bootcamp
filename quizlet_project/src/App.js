import React from "react";
import CardEditor from './CardEditor';
import CardViewer from "./CardViewer";
import Homepage from "./Homepage";
import Test from "./Test";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/editor" element={
          <CardEditor />
        }/>
        <Route path="/viewer/:deckId" element={
          <CardViewer />
        }/>
        <Route 
          path="/test" 
          element={<Test/>}
        />
        <Route 
          path="*" 
          element={<div>Page does not exist!</div>}
        />
    </Routes>
  );
}

export default App;
