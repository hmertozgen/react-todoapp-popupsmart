import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";
import { TodoServicesProvider } from "./context/TodoServicesContext";
import { AuthProvider } from "./context/AuthContext";
import AddTodo from "./components/AddTodo";
import UserLogin from "./components/UserLogin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={"App"}>
      <TodoServicesProvider>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
            <UserLogin />
            <AddTodo />
          </ThemeProvider>
        </AuthProvider>
      </TodoServicesProvider>
    </div>
  );
}

export default App;
