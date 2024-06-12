import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import axios from 'axios';

function App() {
  const { instance, accounts } = useMsal();
  const [data, setData] = useState(null);

  const fetchData = () => {
    instance.acquireTokenSilent({
      scopes: ['api://.../test_api'],
      account: accounts[0]
    }).then((response) => {
      console.log(response.accessToken)
      axios.get("http://localhost:8000/api/test", {
        headers: {
          Authorization: `Bearer ${response.accessToken}`
        }
      }).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.error(error);
      })
    });
    

  };

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ['api://.../test_api'],
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
