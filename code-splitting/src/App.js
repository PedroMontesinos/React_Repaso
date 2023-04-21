import logo from './logo.svg';
import './App.css';
import React, { Suspense, useEffect, useState } from 'react';

const Surspise = React.lazy(() => import("./Surspise"));

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  

  return (
    <div className="App">
      <button onClick={(ev) => setShowSurprise(!showSurprise)}>Pulsa para una sorpresa</button>
      {showSurprise && <Suspense fallback={<p>Cargando...</p>}><Surspise/></Suspense>}
    </div>
  );
}

export default App;
