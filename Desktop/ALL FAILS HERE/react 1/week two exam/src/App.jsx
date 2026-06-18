import { Box, Button, Card, CardMedia } from "@mui/material";
import IMg from "./assets/Link.png";
import { Navbar } from "./muicomponents/Menu";
import { Lang } from "./muicomponents/Lang";
import { Sum } from "./muicomponents/Sum";
import { Dark } from "./muicomponents/dark";
import IMG from "./assets/Background (1).png";
import { Navbar1 } from "./Shared/Navbar";
import Aside from "./Shared/Aside";
import Center from "./Shared/Center";
import About from "./Shared/About";
  import { Footer1 } from "./Shared/Footer1";
import { Video } from "./Shared/Video";
import { SectionCenter } from "./Shared/SectionCenter";
import Footer from "./statickcomponent/footerFinaly";
import Bur from "./assets/bur.svg"
import { useState } from "react";
import CustomDrawer from "./muicomponents/Drawer";
import { Cruds } from "./Cruds/AllCrud";
export default function App() {
   const [open, setOpen] = useState(false);

  return (
    <>
    <Box
      sx={{
        padding:"20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 200,
          padding: "10px",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          image={IMg}
          alt="image"
          sx={{
            width: "100%",
            height: 50,
            objectFit: "cover",
          }}
        />
      </Card>

      <Box
        sx={{
          display: { xs: "none", md: "flex" }, 
          gap: 2,
          alignItems: "center",
        }}
      >
        <Navbar />
        <Lang />
        <Sum />
        <Dark />

        <Button  color="black" sx={{border:"1px solid black", borderRadius:"20px"}}>
          Signin
        </Button>

        <Card sx={{ width: 50, boxShadow: "none" }}>
          <CardMedia
            component="img"
            image={IMG}
            sx={{ width: "100%", height: 50, objectFit: "cover" }}
          />
        </Card>
      </Box>
     <Box
        onClick={() => setOpen(true)}
        sx={{ cursor: "pointer", display: {xs:"block",lg:"none"} }}
      >
        <img src={Bur} width={30} />
      </Box>

      <CustomDrawer open={open} setOpen={setOpen} />
    </Box>
    <Box>
      <Navbar1/>
    </Box>
    <Box>
      <Aside/>
    </Box>
    <Box>
      <Center/>
    </Box>
  <Box>
    <About/>
  </Box>
  <Box>
    <Video/>
  </Box>
  <Box>
    <SectionCenter/>
  </Box>
  <Box>
    <Footer1/>
  </Box>
  <Box>
    <Cruds/>
  </Box>
  <Box>
    <Footer/> 
  </Box>
</>
  );
}