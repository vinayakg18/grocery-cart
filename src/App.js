import './App.css';
import React, { useState, useEffect  } from 'react';
import Header from './header/header';
import ItemList from './ItemList/ItemList';
import SelectedList from './selectedItems/selectedItems';
import axios from 'axios';
function App() {

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'http://localhost:3001/groceries';

    // Make the GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        console.log("response",response)
        // setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1',price: 1.5 },
    { id: 2, name: 'Item 2', price: 1.5},
    { id: 3, name: 'Item 3' ,price: 1.5},
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = item => {
    setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className="container">
        <div className="item">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="item">
        <SelectedList selectedItems={selectedItems} />
        </div>
      
     
      </div>
      
    </div>
  );
}

export default App;
