import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <Register
            isThemeLight={isThemeLight}
            setIsThemeLight={setIsThemeLight}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            isThemeLight={isThemeLight}
            setIsThemeLight={setIsThemeLight}
          />
        }
      />
    </Routes>
  );
}

export default App;
