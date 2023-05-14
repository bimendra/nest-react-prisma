import { useState, useEffect } from 'react';

export function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    fetch('api')
      .then((res) => res.json())
      .then((r) => setName(r.name));
  }, []);
  return <div>{`Welcome, ${name}!`}</div>;
}

export default App;
