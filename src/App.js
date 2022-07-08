import React, { useState } from 'react';
import './index.css';

import { ExperienceProvider } from "./context/ExperienceContext";

import Nav from './components/Nav';

import Header from './sections/Header';
import Gantt from './sections/Gantt';
import Years from './sections/Years';
import ProjectCover from './sections/ProjectCover';

function App() {
  return (
    <div>
      <ExperienceProvider>
        <Nav />
        <Header />
        <Gantt />
        <Years />
        <ProjectCover />
      </ExperienceProvider>
    </div>    
  );
}

export default App;
