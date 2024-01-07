import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
// import About from "./components/About.js";
import Alert from "./components/Alert.js";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Enabled!", "success");
    }
  };

  return (
    // <Router>
    <div>
      <nav>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      </nav>
      {/* <Routes>
          <Route
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          /> */}

      {/* <Route
            path="/"
            element={ */}
      <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
      {/* }
          />
        </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
