"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function RecipesCard({ dataapi }) {
  const router = useRouter();
  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2 }}
      alignItems="stretch"
      justifyContent={"center"}
    >
      {dataapi.recipes.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Card
            onClick={() => router.push(`/recipes/${data.id}`)}
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
              <Image
                src={data.image}
                alt={data.name}
                width={300}
                height={200}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography gutterBottom variant="h5">
                  {data.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Cuisine: {data.cuisine} | Difficulty: {data.difficulty}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Prep: {data.prepTimeMinutes} min | Cook:{" "}
                  {data.cookTimeMinutes} min
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Servings: {data.servings} | Calories:{" "}
                  {data.caloriesPerServing}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Rating: ⭐ {data.rating} ({data.reviewCount} reviews)
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Tags: {data.tags.join(", ")}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Meal Type: {data.mealType.join(", ")}
                </Typography>

                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Ingredients:
                </Typography>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {data.ingredients.slice(0, 5).map((ing, i) => (
                    <li key={i}>
                      <Typography variant="body2" color="text.secondary">
                        {ing}
                      </Typography>
                    </li>
                  ))}
                </ul>
                {data.ingredients.length > 5 && (
                  <Typography variant="caption" color="text.secondary">
                    + {data.ingredients.length - 5} more
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
