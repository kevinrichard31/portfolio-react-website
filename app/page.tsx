"use client"

import Contact from './components/Contact/contact';
import Header from './components/Header/header';
import Heroscene from './components/Heroscene/heroscene';
import Projects from './components/Projects/projects';
import Latestcommits from './components/Latestscommits/latestscommits';
import { useRef } from 'react';

function App() {
  const projectsRef = useRef(null);
  return (
    <div className="App">
        <Heroscene/>
        <Projects ref={projectsRef}/>
        {/* <Contact /> */}
        <Latestcommits username="kevinrichard31"/>
    </div>
  );
}

export default App;
