import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function DropDown({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ color: "black" }}
      >
        {title}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>Lorem 1</MenuItem>
        <MenuItem>Lorem 2</MenuItem>
        <MenuItem>Lorem 3</MenuItem>
      </Menu>
    </>
  );
}

export  function Navbar() {
  return (
 <AppBar  position="static" sx={{ bgcolor: "white",width:"700px",marginRight:"40px" }}>

  <Toolbar
    sx={{
      gap: 10,
      overflowX: "auto",
      whiteSpace: "nowrap",
    }}
  >
    <DropDown title="Home" />
    <DropDown title="Tours" />
    <DropDown title="Destinations" />
    <DropDown title="Activities" />
    <DropDown title="Hotel" />
    <DropDown title="Rental" />
    <DropDown title="Tickets" />
    <DropDown title="Pages" />
    <DropDown title="Blog" />
    <DropDown title="Contact" />
  </Toolbar>
</AppBar>
  );
}