"use client";
import { Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Box sx={{ padding: "0 20px" }}>
        <Link href={"/users"}>
          <Box
            fullWidth
            justifyContent={"center"}
            marginTop={"50px"}
            sx={{ border: "1px solid grey", padding: "40px 0" }}
          >
            <Typography variant="h1" textAlign={"center"}>
              Users
            </Typography>
          </Box>
        </Link>
        <Link href={"/posts"}>
          <Box
            fullWidth
            justifyContent={"center"}
            marginTop={"40px"}
            sx={{ border: "1px solid grey", padding: "40px 0" }}
          >
            <Typography variant="h1" textAlign={"center"}>
              posts
            </Typography>
          </Box>
        </Link>
        <Link href={"/recipes"}>
          <Box
            fullWidth
            justifyContent={"center"}
            marginTop={"40px"}
            sx={{ border: "1px solid grey", padding: "40px 0" }}
          >
            <Typography variant="h1" textAlign={"center"}>
              recipes
            </Typography>
          </Box>
        </Link>
      </Box>
    </div>
  );
}
