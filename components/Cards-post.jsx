"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Postscard({ dataapi }) {
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
      {dataapi.posts.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Card
            sx={{
              width: "300px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => router.push(`/posts/${data.id}`)}
          >
            <CardActionArea
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography gutterBottom variant="h5">
                  {data.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {data.body}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tags: {data.tags.join(", ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Likes: {data.reactions.likes} | Dislikes:{" "}
                  {data.reactions.dislikes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Views: {data.views}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User ID: {data.userId}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
