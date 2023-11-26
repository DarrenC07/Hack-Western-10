import Form from './components/Form';
import TimerComponent from './components/Timer';
import './App.css';

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

const App = () => {
  const [data, setData] = useState(null);
/*
  useEffect(() => {
    const fetchData = async () => {
      const databaseRef = firebase.database().ref('/');
      databaseRef.on('value', (snapshot) => {
        // Get data from the snapshot
        const fetchedData = snapshot.val();
        setData(fetchedData);
      });
    };

    fetchData();
  }, []);
*/
  return (
    <div>
      <h1>Pomoroo</h1>
      <h2>Your mental health friend</h2>
      <TimerComponent/>
      <Form/>
      <h1>Your Firebase Data:</h1>
      
      {/* {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )} */}
      
    </div>
  );
};

export default App;

