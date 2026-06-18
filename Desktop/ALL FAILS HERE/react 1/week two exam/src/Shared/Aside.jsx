import { useState } from "react";
import {
  AppBar, Box, Button, Card, CardContent, Chip, Container,
  Drawer, Grid, IconButton, InputAdornment, List, ListItem,
  ListItemText, Menu, MenuItem, Tab, Tabs, TextField,
  Toolbar, Typography, useMediaQuery, useTheme, Fade, Slide
} from "@mui/material";
import {
  Menu as MenuIcon, Close as CloseIcon, FlightTakeoff,
  Hotel, ConfirmationNumber, DirectionsCar, LocalActivity,
  LocationOn, CalendarMonth, Group, Search, Apple,
  Language, KeyboardArrowDown, Star, TravelExplore,
  Brightness4, Brightness7
} from "@mui/icons-material";

const tokens = {
  gold: "#C9A84C",
  goldLight: "#F5E6C0",
  goldDark: "#A07830",
  ink: "#0D0D0D",
  slate: "#1A1A2E",
  slate2: "#16213E",
  white: "#FFFFFF",
  offWhite: "#F8F6F1",
  muted: "#6B7280",
  card: "rgba(255,255,255,0.96)",
  heroOverlay: "linear-gradient(120deg, rgba(13,13,13,0.82) 0%, rgba(13,13,13,0.45) 55%, rgba(13,13,13,0.10) 100%)",
};

const HERO_BG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80";


const searchTabs = [
  { label: "Tours", icon: <FlightTakeoff sx={{ fontSize: 16 }} /> },
  { label: "Hotels", icon: <Hotel sx={{ fontSize: 16 }} /> },
  { label: "Tickets", icon: <ConfirmationNumber sx={{ fontSize: 16 }} /> },
  { label: "Rental", icon: <DirectionsCar sx={{ fontSize: 16 }} /> },
  { label: "Activities", icon: <LocalActivity sx={{ fontSize: 16 }} /> },
];



function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `${tokens.heroOverlay}, url(${HERO_BG}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        pt: { xs: 10, md: 9 },
        pb: { xs: 6, md: 0 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute", right: { md: "38%", xs: "5%" }, top: "8%",
          width: 320, height: 320, borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.12)`,
          pointerEvents: "none", display: { xs: "none", md: "block" },
        }}
      />
      <Box
        sx={{
          position: "absolute", right: { md: "36%", xs: "2%" }, top: "6%",
          width: 380, height: 380, borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.06)`,
          pointerEvents: "none", display: { xs: "none", md: "block" },
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={600}>
              <Box>
                <Chip
                  label="✦ Luxury Travel Redefined"
                  sx={{
                    background: `linear-gradient(135deg, ${tokens.gold}, ${tokens.goldDark})`,
                    color: tokens.ink,
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    height: 32,
                    mb: 3,
                    px: 0.5,
                    "& .MuiChip-label": { px: 1.5 },
                    boxShadow: `0 4px 16px rgba(201,168,76,0.35)`,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 800,
                    color: tokens.white,
                    fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem", lg: "4.4rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    mb: 2.5,
                  }}
                >
                  Your Passport
                  <Box component="span" sx={{ display: "block", color: tokens.gold }}>
                    to Global
                  </Box>
                  Glamour
                </Typography>

                <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 0.6 }}>
                  {[
                    "Curated luxury escapes to 120+ iconic destinations worldwide.",
                    "Private jets, 5-star retreats, and bespoke itineraries crafted for you.",
                    "Award-winning service from booking to the moment you return.",
                  ].map((line, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: tokens.gold, flexShrink: 0 }} />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.78)",
                          fontSize: { xs: "0.88rem", md: "0.95rem" },
                          lineHeight: 1.55,
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: { xs: 3, md: 5 }, mb: 4 }}>
                  {[["12K+", "Destinations"], ["98%", "Satisfaction"], ["15+", "Years Trust"]].map(([num, label]) => (
                    <Box key={label}>
                      <Typography sx={{ fontFamily: "serif", fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.7rem" }, color: tokens.gold, lineHeight: 1 }}>
                        {num}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", mt: 0.3, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                  {[
                    { icon: <Apple sx={{ fontSize: 22 }} />, label: "App Store", sub: "Download on the" },
                    {
                      icon: (
                        <Box component="svg" viewBox="0 0 24 24" sx={{ width: 22, height: 22, fill: tokens.white }}>
                          <path d="M3.18 23.72a2.56 2.56 0 0 0 1.46-.41l8.86-5.12-1.97-1.97-8.35 5.06v2.44zm19.2-11.32L19.7 10.8l-2.12 2.12 2.12 2.12 2.7-1.62c.77-.46.77-1.52-.02-1.98zM3.18.28A2.61 2.61 0 0 0 1.49.7L12 11.23l1.97-1.97L4.64.69A2.57 2.57 0 0 0 3.18.28zm7.17 11.95L1.49 3.37A2.59 2.59 0 0 0 1 5v14a2.6 2.6 0 0 0 .49 1.56l8.86-8.33z" />
                        </Box>
                      ),
                      label: "Google Play",
                      sub: "Get it on",
                    },
                  ].map((app) => (
                    <Button
                      key={app.label}
                      startIcon={app.icon}
                      sx={{
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: tokens.white,
                        borderRadius: "12px",
                        px: 2, py: 1,
                        textTransform: "none",
                        textAlign: "left",
                        minWidth: 145,
                        "&:hover": {
                          background: "rgba(255,255,255,0.15)",
                          borderColor: tokens.gold,
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.22s",
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: "0.65rem", opacity: 0.7, lineHeight: 1 }}>{app.sub}</Typography>
                        <Typography sx={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1.3 }}>{app.label}</Typography>
                      </Box>
                    </Button>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>

]          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Slide in direction="up" timeout={700}>
              <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: 520 } }}>
                <SearchBox />
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const destinations = [
  { name: "Eiffel Tower", location: "Paris, France", tours: 356, img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&q=70", rating: 4.9 },
  { name: "Machu Picchu", location: "Peru", tours: 312, img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300&q=70", rating: 4.8 },
  { name: "Great Wall", location: "China", tours: 289, img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&q=70", rating: 4.7 },
  { name: "Statue of Liberty", location: "New York, USA", tours: 401, img: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=300&q=70", rating: 4.8 },
  { name: "Taj Mahal", location: "Agra, India", tours: 378, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&q=70", rating: 4.9 },
  { name: "Opera House", location: "Sydney, Australia", tours: 267, img: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=300&q=70", rating: 4.7 },
  { name: "Colosseum", location: "Rome, Italy", tours: 445, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&q=70", rating: 4.9 },
  { name: "Grand Canyon", location: "Arizona, USA", tours: 318, img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=300&q=70", rating: 4.8 },
];

function DestinationsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <Box sx={{ background: tokens.offWhite, py: { xs: 6, md: 9 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography variant="overline" sx={{ color: tokens.gold, fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.72rem" }}>
            HAND-PICKED FOR YOU
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "serif", fontWeight: 800, fontSize: { xs: "2rem", md: "2.6rem" }, color: tokens.ink, mt: 0.5, letterSpacing: "-0.02em" }}>
            Popular Destinations
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.muted, mt: 1, fontSize: "0.95rem" }}>
            Navigate the Globe with Confidence
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 2.5 }} justifyContent="center">
          {destinations.map((dest, i) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={dest.name} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: 130,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 90, md: 110 },
                    height: { xs: 112, md: 138 },
                    borderRadius: "50% / 45%",
                    overflow: "hidden",
                    border: hovered === i ? `3px solid ${tokens.gold}` : "3px solid transparent",
                    transform: hovered === i ? "translateY(-6px) scale(1.04)" : "none",
                    transition: "all 0.28s ease",
                    boxShadow: hovered === i ? `0 12px 32px rgba(201,168,76,0.32)` : "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <Box
                    component="img"
                    src={dest.img}
                    alt={dest.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s", transform: hovered === i ? "scale(1.08)" : "scale(1)" }}
                  />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "0.8rem", mt: 1.5, color: tokens.ink, textAlign: "center", lineHeight: 1.2 }}>
                  {dest.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.3, mt: 0.3 }}>
                  <Star sx={{ fontSize: 11, color: tokens.gold }} />
                  <Typography sx={{ fontSize: "0.7rem", color: tokens.gold, fontWeight: 600 }}>{dest.rating}</Typography>
                  <Typography sx={{ fontSize: "0.68rem", color: tokens.muted }}>· {dest.tours} Tours</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const tours = [
  {
    title: "Swiss Alps Luxury Escape",
    location: "Switzerland",
    price: 4299,
    duration: "8 Days",
    rating: 4.96,
    reviews: 284,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=70",
    tag: "Best Seller",
  },
  {
    title: "Bali Private Retreat",
    location: "Indonesia",
    price: 2850,
    duration: "6 Days",
    rating: 4.91,
    reviews: 412,
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=70",
    tag: "Top Rated",
  },
  {
    title: "Maldives Overwater Villa",
    location: "Maldives",
    price: 6100,
    duration: "5 Days",
    rating: 4.98,
    reviews: 189,
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=70",
    tag: "Luxury Pick",
  },
  {
  title: "Maldives Overwater Villa",
    location: "Maldives",
    price: 6100,
    duration: "5 Days",
    rating: 4.98,
    reviews: 189,
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=70",
    tag: "Luxury Pick",
  },
    {
    title: "Bali Private Retreat",
    location: "Indonesia",
    price: 2850,
    duration: "6 Days",
    rating: 4.91,
    reviews: 412,
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=70",
    tag: "Top Rated",
  },
];

function FeaturedTours() {
  const [hovered, setHovered] = useState(null);

  return (
    <Box sx={{ background: tokens.white, py: { xs: 6, md: 9 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: { xs: 4, md: 5 }, flexWrap: "wrap", gap: 2 }}>
          <Box>
            <Typography variant="overline" sx={{ color: tokens.gold, fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.72rem" }}>
              CURATED EXPERIENCES
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: "serif", fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.4rem" }, color: tokens.ink, mt: 0.5, letterSpacing: "-0.02em" }}>
            Recommended For You
            </Typography>
          </Box>
       
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {tours.map((tour, i) => (
            <Grid item xs={12} sm={6} md={4} key={tour.title}>
              <Card
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                elevation={0}
                sx={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transform: hovered === i ? "translateY(-6px)" : "none",
                  boxShadow: hovered === i ? "0 20px 48px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "all 0.28s ease",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={tour.img}
                    alt={tour.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered === i ? "scale(1.05)" : "scale(1)", transition: "transform 0.35s ease" }}
                  />
                  <Chip
                    label={tour.tag}
                    size="small"
                    sx={{
                      position: "absolute", top: 14, left: 14,
                      background: `linear-gradient(135deg, ${tokens.gold}, ${tokens.goldDark})`,
                      color: tokens.ink, fontWeight: 700, fontSize: "0.7rem",
                    }}
                  />
                  <Box sx={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.45)", borderRadius: "8px", px: 1, py: 0.3 }}>
                    <Typography sx={{ color: tokens.white, fontSize: "0.72rem", fontWeight: 600 }}>{tour.duration}</Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 2.5 }}>
                  <Typography sx={{ fontSize: "0.72rem", color: tokens.muted, mb: 0.5, display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOn sx={{ fontSize: 13 }} /> {tour.location}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: 700, fontSize: "1.1rem", color: tokens.ink, mb: 1.5 }}>
                    {tour.title}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Star sx={{ fontSize: 16, color: tokens.gold }} />
                      <Typography sx={{ fontWeight: 700, fontSize: "0.875rem", color: tokens.ink }}>{tour.rating}</Typography>
                      <Typography sx={{ fontSize: "0.78rem", color: tokens.muted }}>({tour.reviews})</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ fontSize: "0.7rem", color: tokens.muted }}>from</Typography>
                      <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: tokens.ink, lineHeight: 1 }}>
                        ${tour.price.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2, background: tokens.ink, color: tokens.white,
                      textTransform: "none", fontWeight: 700, borderRadius: "10px",
                      py: 1, boxShadow: "none",
                      "&:hover": { background: tokens.gold, color: tokens.ink, boxShadow: `0 6px 20px rgba(201,168,76,0.35)` },
                      transition: "all 0.22s",
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


export default function Aside() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box sx={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
      <DestinationsSection />
      <FeaturedTours />
    </Box>
  );
}