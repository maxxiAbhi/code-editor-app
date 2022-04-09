import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/editor/:roomId' element={<EditorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
