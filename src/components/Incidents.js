import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Incidents(props) {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('/api/now/table/incident?sysparm_limit=10').then((res) => {
      setIncidents(res.data.result);
    });
  }, []);

  return (
    <ul>
      {incidents.map((i) => (
        <li className='card' key={i.sys_id}>
          {i.number}: {i.short_description}
        </li>
      ))}
    </ul>
  );
}
export default Incidents;
