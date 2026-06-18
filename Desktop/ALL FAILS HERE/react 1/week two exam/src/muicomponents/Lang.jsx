import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function Lang() {
  const [lang, setLang] = useState("EN");

  return (
    <FormControl size="small">
      <Select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <MenuItem value="EN">EN</MenuItem>
        <MenuItem value="RU">RU</MenuItem>
        <MenuItem value="TJ">TJ</MenuItem>
      </Select>
    </FormControl>
  );
}