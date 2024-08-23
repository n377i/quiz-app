import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookmarksPage";
import FormPage from "./pages/FormPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const getInitialTheme = () => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route
          path="/settings"
          element={
            <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
