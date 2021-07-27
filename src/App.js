import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';
import './styles/App.scss'
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  const [items, setItems] = useState([])


  const getData = () => {
    fetch('http://0.0.0.0:3000/api/todos')
      .then(res => res.json())
      .then(data => {
        console.log(data, ' data')
        setItems(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const addItem = (item) => {
    // setItems([...items, item])

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }

    fetch('http://0.0.0.0:3000/api/todos', requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log('creted successfully')
        getData()
      })
  }

  return (
    <div className={`light container`}>
      <div className="main">
        <Header />
        <Form addItem={addItem} />
        <TodoList items={items} />
      </div>
    </div>
  );
}

export default App;
