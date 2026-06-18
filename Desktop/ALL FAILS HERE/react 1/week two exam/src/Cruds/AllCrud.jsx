import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

const url = "https://to-dos-api.softclub.tj/api/to-dos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export function Cruds() {
  const [data, setData] = useState([]);

  async function getTodos() {
    try {
      const res = await axios.get(url);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(url + "?id=" + id);
      getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2f7, #f8fafc)",
        padding: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          mb: 5,
          color: "#222",
        }}
      >
         Todo List
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "0.3s",
              background: "#fff",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                p: 1,
                flexWrap: "wrap",
              }}
            >
     {item.images?.length > 0 && (
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={10}
    slidesPerView={1}
    style={{
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "10px",
    }}
  >
    {item.images.map((el) => (
      <SwiperSlide key={el.id}>
        <img
          src={`https://to-dos-api.softclub.tj/images/${el.imageName}`}
          alt=""
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)}
            </Box>

            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#666", mb: 2 }}
              >
                {item.description}
              </Typography>

              <Chip
                label={item.isCompleted ? "Completed" : "Pending"}
                color={item.isCompleted ? "success" : "warning"}
                size="small"
                sx={{ mb: 2, fontWeight: 600 }}
              />

              <Stack direction="row" justifyContent="flex-end">
                <Button
                  onClick={() => deleteUser(item.id)}
                  variant="contained"
                  color="error"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </Button>
                <Button sx={{marginLeft:"30px"}} variant="outlined">Edit</Button>

              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}