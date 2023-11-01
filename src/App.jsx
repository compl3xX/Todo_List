import './App.css'
import MainContainer from "./components/MainContainer"
import { TodoProvider } from "./context/Context.jsx"

function App() {
  return (

    <TodoProvider>
      <div className="MainWindow">
        <MainContainer />
      </div>
    </TodoProvider>

  )
}

export default App
