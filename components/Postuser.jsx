"use client";
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
  Box,
  Chip,
  Stack,
  Grid,
} from "@mui/material";

export default function PostCardFull({ post }) {
  if (!post) throw new Error("Post data is required");

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

  const entries = Object.entries(post);

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
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>

              <Divider />

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {post.tags?.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" />
                ))}
              </Stack>

              <Divider />

              <Typography variant="body2" color="text.secondary">
                Reactions: Likes {post.reactions?.likes || 0}, Dislikes{" "}
                {post.reactions?.dislikes || 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Views: {post.views}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                User ID: {post.userId}
              </Typography>
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
