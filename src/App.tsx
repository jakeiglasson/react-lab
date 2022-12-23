import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListComponent from './components/list-component/ListComponent';
import ModalContainer from './components/modal-container/ModalContainer';

function App() {
  const [count, setCount] = useState(0);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <ListComponent
          createSomething={function (): void {
            // throw new Error("Function not implemented.");
            setShowModal(true);
          }}
          readSomething={function (): void {
            throw new Error('Function not implemented.');
          }}
          updateSomething={function (): void {
            throw new Error('Function not implemented.');
          }}
          destroySomething={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      {showModal && <ModalContainer setShowModal={v => setShowModal(v)} />}
    </div>
  );
}

export default App;
