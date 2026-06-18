import { Box, Button, Typography } from "@mui/material";
import BG from "../assets/0b73245cb21e4b18084fb81ddcb3ad4fb00878e3.png";
import Apps from "../assets/Link → googleplay.png.png";
import Apps1 from "../assets/Link → appstore.png.png";
import SearchBox from "./SearchBox";

export function Navbar1() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          justifyContent: "space-around",
          alignItems: "center",
          gap: 4,
          width: "100%",
          maxWidth: 1200,
          borderRadius: "20px",
          p: 3,
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Button
            sx={{
              backgroundColor: "yellow",
              px: 2,
              py: 1,
              borderRadius: "20px",
              color: "black",
              mb: 2,
            }}
          >
            Luxury Travel Redefined
          </Button>

          <Typography variant="h4" sx={{ color: "black" }}>
            Your Passport to <br />
            Global Glamour
          </Typography>

          <Typography sx={{ color: "black", mt: 2, mb: 2 }}>
            Personalized Travel Experiences <br />
            Expert Destination Knowledge <br />
            Exceptional Customer Service
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
            <img src={Apps} width={120} />
            <img src={Apps1} width={120} />
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 450 }}>
          <SearchBox />
        </Box>
      </Box>
    </Box>
  );
}