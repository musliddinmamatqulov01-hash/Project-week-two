import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Loc from "../assets/location.svg.png";
import Menu2 from "../muicomponents/Menu2";

export default function SearchBox() {
  return (
    <Box
      sx={{
        width: "100%", 
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          p: 2,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Tabs
          variant="scrollable" 
          scrollButtons="auto"
          sx={{ mb: 2 }}
        >
          <Tab label="Tours" />
          <Tab label="Hotels" />
          <Tab label="Tickets" />
          <Tab label="Rental" />
          <Tab label="Activities" />
        </Tabs>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            gap: 2,
            bgcolor: "#f3f4f6",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Box>
            <Typography sx={{ color: "gray" }}>Location</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Loc} width={18} />
              <Menu2 />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "gray" }}>Check In</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Loc} width={18} />
              <Menu2 />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "gray" }}>Check Out</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Loc} width={18} />
              <Menu2 />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "gray" }}>Guest</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Loc} width={18} />
              <Menu2 />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              bgcolor: "black",
              borderRadius: 10,
              px: 4,
              width: { xs: "100%", md: "auto" },
            }}
          >
            Search
          </Button>

          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Need some help?
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}