import { useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export  function Dark() {
  const [dark, setDark] = useState(false);

  return (
    <IconButton
      onClick={() => setDark(!dark)}
      sx={{
        backgroundColor: dark ? "#222" : "#f5f5f5",
        color: dark ? "#fff" : "#000",
        borderRadius: "50%",
        width: 45,
        height: 45,
        "&:hover": {
          backgroundColor: dark ? "#333" : "#e0e0e0",
        },
      }}
    >
      {dark ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}