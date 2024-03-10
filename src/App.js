import * as React from 'react'
import './App.css';
import Layout from './pages/Layout.tsx'
import { Toaster } from "../src/components/ui/toaster.tsx"

function App() {
  return (
    <div className="dark">
      <div className='poke-bg'>
        <div className='bg-background test-bg'>
          <div className="App-wrapper">
            <Layout />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
