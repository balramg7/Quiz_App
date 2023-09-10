import './App.css'
import MoneyList from './Money List/MoneyList'
import Quiz_Box from './Quiz_Box/Quiz_Box'
import { useState } from 'react';
import Front from './Front/Front';
function App() {
  const [username, setUsername] = useState(null);
  return (
    <div className="app">
      {!username ? (
        <Front setUsername={setUsername} />
      ) : (
        <>
        <Quiz_Box />
        <MoneyList />
        </>
      )}
      </div>
  )
}

export default App
