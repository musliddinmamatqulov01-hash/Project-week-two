import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    InputBase,
    Button,
    Link,
    IconButton,
    Divider,
} from "@mui/material";

// Импорт иконок из MUI
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MailOutlineIcon from "@mui/icons-material/Email";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../assets/Link → logo-footer2.svg.png";
import mountain from "../assets/f42adff0fc5f603897f4395b805dad86117b8b99.png";
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#fff",
                pt: "64px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="false" sx={{ maxWidth: "1380px" }}>
                {/* ВЕРХНЯЯ ЧАСТЬ ФУТЕРА */}
                <Grid container spacing={4} sx={{ mb: "48px" }}>
                    {/* Блок 1: Контакты и Логотип */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                mb: "24px",
                            }}
                        >
                            {/* Эмуляция логотипа с пальмой */}

                            <Typography
                                component="img"
                                src={logo}
                                alt="logo"
                            ></Typography>
                        </Box>

                        {/* Адрес */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: "12px",
                                mb: "16px",
                                alignItems: "flex-start",
                            }}
                        >
                            <RoomOutlinedIcon
                                sx={{
                                    color: "#888",
                                    fontSize: "20px",
                                    mt: "2px",
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#666",
                                    fontSize: "14px",
                                    lineHeight: 1.5,
                                }}
                            >
                                4517 Washington Ave. Manchester, Kentucky 39495
                            </Typography>
                        </Box>


                        {/* Часы работы */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: "12px",
                                mb: "16px",
                                alignItems: "center",
                            }}
                        >
                            <AccessTimeOutlinedIcon
                                sx={{
                                    color: "#88px",
                                    color: "#888",
                                    fontSize: "20px",
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: "#666", fontSize: "14px" }}
                            >
                                Hours: 8:00 - 17:00, Mon - Sat
                            </Typography>
                        </Box>

                        {/* Email */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: "12px",
                                alignItems: "center",
                            }}
                        >
                            <MailOutlineIcon
                                sx={{ color: "#888", fontSize: "20px" }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: "#666", fontSize: "14px" }}
                            >
                                support@travila.com
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Блок 2: Навигация "Services" (Две колонки ссылок вручную) */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#000",
                                mb: "24px",
                                fontSize: "16px",
                            }}
                        >
                            Services
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",
                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Tour Guide
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",
                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Tour Booking
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",

                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Hotel Booking
                                </Link>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",
                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Ticket Booking
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",
                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Rental Services
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#666",
                                        fontSize: "14px",
                                        "&:hover": { color: "#000" },
                                    }}
                                >
                                    Travel plane
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Блок 3: Подписка на рассылку */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#000",
                                mb: "24px",
                                fontSize: "16px",
                            }}
                        >
                            Subscribe For Newsletter
                        </Typography>


                        {/* Форма инпута инлайном */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #EAEAEA",
                                borderRadius: "100px",
                                p: "4px 4px 4px 16px",
                                mb: "12px",
                                backgroundColor: "#fff",
                            }}
                        >
                            <MailOutlineIcon
                                sx={{ color: "#888", mr: "8px" }}
                            />
                            <InputBase
                                placeholder="Enter your email"
                                sx={{ flex: 1, fontSize: "14px" }}
                            />
                            <Button
                                sx={{
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    borderRadius: "100px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    px: "24px",
                                    py: "8px",
                                    fontSize: "14px",
                                    "&:hover": { backgroundColor: "#222" },
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>

                        <Typography
                            variant="caption"
                            sx={{ color: "#888", fontSize: "12px" }}
                        >
                            No ads. No trails. No commitments
                        </Typography>
                    </Grid>
                </Grid>

                {/* СРЕДНЯЯ ПАНЕЛЬ С СОЦСЕТЯМИ И ТЕЛЕФОНОМ */}
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    sx={{ pb: "32px" }}
                >
                    {/* Соцсети */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700, mb: "12px" }}
                        >
                            Follow us
                        </Typography>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            {/* Кнопки круглые серые */}
                            {[
                                InstagramIcon,
                                FacebookIcon,
                                TwitterIcon,
                                YouTubeIcon,
                            ].map((Icon, i) => (
                                <IconButton
                                    key={i}
                                    sx={{
                                        backgroundColor: "#F4F5F6",
                                        color: "#000",
                                        width: "36px",
                                        height: "36px",
                                        "&:hover": {
                                            backgroundColor: "#eaeaea",
                                        },
                                    }}
                                >
                                    <Icon sx={{ fontSize: "18px" }} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>


                    {/* Телефон поддержки */}
                    <Grid
                        size={{ xs: 12, sm: 4 }}
                        sx={{ textAlign: { xs: "left", sm: "center" } }}
                    >
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                mb: "4px",
                            }}
                        >
                            <PhoneInTalkOutlinedIcon
                                sx={{ color: "#000", fontSize: "20px" }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 700, color: "#000" }}
                            >
                                Need help? Call us
                            </Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                color: "#FFA500",
                                fontSize: "22px",
                            }}
                        >
                            1-800-222-8888
                        </Typography>
                    </Grid>

                    {/* Платежные шлюзы */}
                    <Grid
                        size={{ xs: 12, sm: 4 }}
                        sx={{ textAlign: { xs: "left", sm: "right" } }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700, mb: "12px" }}
                        >
                            Payments
                        </Typography>
                        <Box
                            sx={{
                                display: "inline-flex",
                                gap: "8px",
                                flexWrap: "wrap",
                            }}
                        >
                            {/* Фейковые заглушки под платежные системы */}
                            {["PayPal", "stripe", "MasterCard", "Skrill"].map(
                                (text, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            border: "1px solid #EAEAEA",
                                            borderRadius: "6px",
                                            px: "12px",
                                            py: "4px",
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            color: "#888",
                                            backgroundColor: "#fff",
                                        }}
                                    >
                                        {text}
                                    </Box>
                                ),
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                {/* НИЖНЯЯ ПЛАНКА (КОПИРАЙТ И ССЫЛКИ) */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: "24px",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: "12px", sm: "0px" },
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{ color: "#888", fontSize: "13px" }}
                    >
                        © 2024 Travila Inc. All rights reserved.
                    </Typography>


                    <Box
                        sx={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
                    >
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: "#888",
                                fontSize: "13px",
                                "&:hover": { color: "#000" },
                            }}
                        >
                            Terms
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: "#888",
                                fontSize: "13px",
                                "&:hover": { color: "#000" },
                            }}
                        >
                            Privacy policy
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: "#888",
                                fontSize: "13px",
                                "&:hover": { color: "#000" },
                            }}
                        >
                            Legal notice
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: "#888",
                                fontSize: "13px",
                                "&:hover": { color: "#000" },
                            }}
                        >
                            Accessibility
                        </Link>
                    </Box>
                </Box>
            </Container>

            {/* ФОНОВЫЙ БЛОК С ЗЕЛЕНЫМИ ХОЛМАМИ И КНОПКОЙ НАВЕРХ */}
            <Box
                sx={{
                    width: "100%",
                    height: "140px",
                    position: "relative",
                    mt: "20px",
                    // Если у тебя будет вырезанная картинка гор:
                    backgroundImage: `url(${mountain})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* Кнопка "Наверх" в правом углу */}
            </Box>
        </Box>
    );
};

export default Footer;
