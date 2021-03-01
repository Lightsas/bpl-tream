import { useState } from 'react';
import './App.css';
import Players from './components/All-Players/Players';
function App() {
  return (
    <div className="main-body">
      <h1>BPL TOURNAMENT 2021</h1>
      <Players></Players>
    </div>
  );
}

export default App;
