import React from 'react';
import Button from "@mui/material/Button";

function DarkModeToggle({ darkMode, setDarkMode }) {
  function handleClick() {
    setDarkMode(!darkMode); 
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </Button>
  );
}

export default DarkModeToggle;
