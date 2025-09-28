"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
export default function ActionAreaCard({ dataapi }) {
  console.log(dataapi);
  const router = useRouter();

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2 }}
      alignItems="stretch"
      justifyContent={"center"}
    >
      {dataapi.users.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card
            onClick={() => router.push(`/users/${user.id}`)}
            sx={{
              width: "300px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={user.image}
                alt={user.firstName}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography gutterBottom variant="h5">
                  {user.firstName}-{user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {user.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Birth Date: {user.birthDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Blood Group: {user.bloodGroup}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Company: {user.company?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {user.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {user.age} | Gender: {user.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  University: {user.university}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
