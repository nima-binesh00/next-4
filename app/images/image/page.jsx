"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "next/navigation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  pb: 10,
  borderRadius: 2,
};
export default function page() {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const id = searchParams.get("id");
  return (
    <div>
      <Box sx={style}>
        <Typography variant="h6" textAlign="center">
          Image ID: {id}
        </Typography>
        {img && (
          <>
            <img
              src={`${img}?w=800&fit=crop&auto=format`}
              alt={id}
              style={{
                width: "100%",
                height: "91%",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
          </>
        )}

        <Typography variant="h6" textAlign="center">
          <Button variant="contained" textAlign="center">
            download
          </Button>
        </Typography>
      </Box>
    </div>
  );
}
