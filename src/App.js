import React, { useState } from 'react';
import './index.css';

import { ExperienceProvider } from "./context/ExperienceContext";

import Nav from './components/Nav';

import Header from './sections/Header';
import Gantt from './sections/Gantt';
import SectionLive from './sections/Lives';

function App() {
  return (
    <div>
      <ExperienceProvider>
        <Nav />
        <Header />
        <Gantt />
        <SectionLive />
      </ExperienceProvider>
    </div>    
  );
}

export default App;
