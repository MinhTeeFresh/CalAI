import { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [wordInput, setWordInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [outputData, setOutputData] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);

  const handleWordInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setWordInput(event.target.value);
  };

  const handleNumberInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setNumberInput(event.target.value);
  };

  const handleOutputClick = () => {
    const newNumber = parseInt(numberInput, 10) || 0;
    setTotalNumber((prevTotal) => prevTotal + newNumber);

    setOutputData((prevOutputData) => [...prevOutputData, { word: wordInput, number: newNumber }]);
    setWordInput('');
    setNumberInput('');
  };

  return (
    <>
      <label>
        <h1>Word Input:</h1>
        <input type="text" value={wordInput} onChange={handleWordInputChange} style={{ width: '300px', height: '100px', fontSize: '50px'}} />
      </label>
      <br />
      <br />
      <label>
       <h1>Calory Input:</h1>
        <input type="number" value={numberInput} onChange={handleNumberInputChange} style={{ width: '300px', height: '100px', fontSize: '50px' }} />
      </label>
      <br />
      <br />
      <button onClick={handleOutputClick}>Append to Output</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {outputData.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <label>
        Total Number:
        <input type="text" value={totalNumber} style={{width: '300px', height: '100px', fontSize: '50px'}}readOnly />
      </label>
    </>
  )
}

export default App
