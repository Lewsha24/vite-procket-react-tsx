import './App.css'
import {Main} from './pages/Main'
import {Header} from "./layout/Header";
import { MyProvider } from './context/context';

function App() {
  return (
      <MyProvider>
        <Header/>
        <Main />
      </MyProvider>
  )
}

export default App
