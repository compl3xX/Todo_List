import './App.css'
import MainContainer from "./components/MainContainer"
<<<<<<< Updated upstream
import { TodoProvider } from "./context/context"
=======
import { TodoProvider } from "./context/Context"
>>>>>>> Stashed changes

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
