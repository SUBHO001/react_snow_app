import Incidents from './components/Incidents';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('/api/now/table/incident?sysparm_limit=10').then((res) => {
      setIncidents(res.data.result);
    });
  }, []);

  return (
    <div>
      <h2>Hello, ServiceNow!</h2>

      <Incidents />
    </div>
  );

  // return (
  //   <div>
  //     <h1>My Todos</h1>
  //     <Todo text='100' />
  //     <Todo text='300' />
  //     <Todo text='200' />
  //   </div>
  // );
}

export default App;
