import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function Sum() {
  const [lang, setLang] = useState("EN");

  return (
    <FormControl size="small">
      <Select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <MenuItem value="EN">USD</MenuItem>
        <MenuItem value="RU">SOMONI</MenuItem>
        <MenuItem value="TJ">RUBL</MenuItem>
      </Select>
    </FormControl>
  );
}