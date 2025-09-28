"use client";

import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Notfound() {
  return (
    <Stack justifyContent={"center"} width={"100%"} alignItems={"center"}>
      <h1>404</h1>
      <Image src={"/404_page_cover.jpg"} width={300} height={200} alt="404" />
    </Stack>
  );
}
