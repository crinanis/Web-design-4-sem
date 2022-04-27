import React from 'react'
import "./index.css"
import { Notes } from './Notes'
import { StudentInfoHandler } from './StudentInfoHandler'

function App() {
  return (
<>
  <h2>Info about student:</h2>
  <StudentInfoHandler />
  <br/>
  <h2>Create note:</h2>
  <Notes />
</>
  );
}

export default App;
