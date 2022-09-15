import "./App.css";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoServicesProvider } from "./context/TodoServicesContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <TodoServicesProvider>
        <AuthProvider>
          <ThemeProvider>
            <TodoList />
          </ThemeProvider>
        </AuthProvider>
      </TodoServicesProvider>
    </div>
  );
}

export default App;
