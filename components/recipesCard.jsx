"use client";
import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Box,
  Chip,
  Stack,
  Grid,
} from "@mui/material";

export default function RecipeCardFull({ recipe }) {
  if (!recipe) throw new Error("Recipe data is required");

  const renderRow = (key, value, parentKey = "") => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return Object.entries(value).flatMap(([subKey, subValue]) =>
        renderRow(subKey, subValue, parentKey ? `${parentKey}.${key}` : key)
      );
    } else if (Array.isArray(value)) {
      return (
        <tr key={parentKey ? `${parentKey}.${key}` : key}>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            {parentKey ? `${parentKey}.${key}` : key}
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            {value.join(", ")}
          </td>
        </tr>
      );
    }
    return (
      <tr key={parentKey ? `${parentKey}.${key}` : key}>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}>
          {parentKey ? `${parentKey}.${key}` : key}
        </td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}>
          {value?.toString() || "-"}
        </td>
      </tr>
    );
  };

  const entries = Object.entries(recipe);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "20px" }}
      justifyContent="center"
    >
      {/* کارت */}
      <Grid item xs={12} md={6}>
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <CardActionArea
            sx={{
              alignItems: "stretch",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={recipe.image}
              alt={recipe.name}
              sx={{ objectFit: "cover" }}
            />

            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography variant="h6" gutterBottom>
                {recipe.name}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                {recipe.tags?.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" />
                ))}
                <Chip label={`Difficulty: ${recipe.difficulty}`} size="small" />
                <Chip label={`Cuisine: ${recipe.cuisine}`} size="small" />
                <Chip
                  label={`Meal: ${recipe.mealType?.join(", ")}`}
                  size="small"
                />
              </Stack>

              <Divider />

              <Typography variant="body2" color="text.secondary">
                Prep Time: {recipe.prepTimeMinutes} min | Cook Time:{" "}
                {recipe.cookTimeMinutes} min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Servings: {recipe.servings}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Calories per serving: {recipe.caloriesPerServing}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {recipe.rating} ({recipe.reviewCount} reviews)
              </Typography>

              <Divider />

              <Typography variant="subtitle2">Ingredients</Typography>
              <ul>
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>

              <Divider />

              <Typography variant="subtitle2">Instructions</Typography>
              <ol>
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* جدول کامل */}
      <Grid item xs={12} md={6}>
        <Box sx={{ overflowX: "auto" }}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    background: "#fafafa",
                    textAlign: "left",
                    width: 200,
                  }}
                >
                  Field
                </th>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    background: "#fafafa",
                    textAlign: "left",
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.flatMap(([key, value]) => renderRow(key, value))}
            </tbody>
          </table>
        </Box>
      </Grid>
    </Grid>
  );
}
