"use client"

import Contact from './components/Contact/contact';
import Header from './components/Header/header';
import Heroscene from './components/Heroscene/heroscene';
import Projects from './components/Projects/projects';
import { useRef } from 'react';

function App() {
  const projectsRef = useRef(null);
  return (
    <div className="App">
        <Header projectsRef={projectsRef}/>
        <Heroscene/>
        <Projects ref={projectsRef}/>
        {/* <Contact /> */}
    </div>
  );
}

export default App;
