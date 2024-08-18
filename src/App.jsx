import { useState, useEffect } from 'react'
import './App.css'

import { Input } from './assets/components/Input'
import ReposList from './assets/components/repos'

function App() {
  const [inputValue, setInputValue] = useState('')

  
  useEffect(() => {
    console.log('Hello from useEffect')
    
    return () => {
      console.log('o componente finalizou')
    }
  }, []
)

useEffect(() => {
  console.log('Hello from useEffect')
  console.log('inputValue:', inputValue)
}, [inputValue]
)


const [oValorDoInputETrue, setoValorDoInputETrue] = useState('')

  return (
    <>
  <ReposList />

    {/* <ul>
      {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
    </ul>
      <Input 
      type=""
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => {
        if (inputValue === 'true') {
          console.log('o valor do input é true')
        } else {
          console.log('o valor do input não é true')
        }
      }}></button> */}
    </>
  )
  
}

export default App
