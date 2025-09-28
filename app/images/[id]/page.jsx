"use client";
import { useSearchParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function ImagePage({ params }) {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const id = params.id;

  return (
    <Box sx={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <Typography variant="h5">Image ID: {id}</Typography>
      {img && (
        <img
          src={`${img}?w=800&fit=crop&auto=format`}
          alt={id}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
      )}
      <Button variant="contained">Download</Button>
    </Box>
  );
}
