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

const InfoRow = ({ label, children }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2" sx={{ ml: 1, textAlign: "right" }}>
      {children}
    </Typography>
  </Box>
);

export default function UserCardFull({ user }) {
  if (!user) throw new Error("User data is required");

  // تابع برای رندر هر ردیف جدول، شامل آبجکت‌های تو در تو
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

  const entries = Object.entries(user);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "20px" }}
      alignItems="stretch"
      justifyContent={"center"}
    >
      {/* کارت */}
      <Grid item>
        <Card sx={{ width: 420, display: "flex", flexDirection: "column" }}>
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
              image={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{ objectFit: "cover" }}
            />

            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography variant="h6" gutterBottom>
                {user.firstName} {user.lastName}{" "}
                <Typography component="span" sx={{ color: "text.secondary" }}>
                  ({user.username})
                </Typography>
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label={user.role} size="small" />
                <Chip label={user.gender} size="small" />
                <Chip label={`Age: ${user.age}`} size="small" />
                <Chip label={user.bloodGroup} size="small" />
              </Stack>

              <Divider />

              <InfoRow label="Email:">{user.email}</InfoRow>
              <InfoRow label="Phone:">{user.phone}</InfoRow>
              <InfoRow label="Birth Date:">{user.birthDate}</InfoRow>
              <InfoRow label="Height / Weight:">{`${user.height} cm / ${user.weight} kg`}</InfoRow>
              <InfoRow label="Eye Color:">{user.eyeColor}</InfoRow>
              <InfoRow label="Hair:">
                {user.hair?.type
                  ? `${user.hair.type} (${user.hair.color})`
                  : user.hair?.color}
              </InfoRow>

              <Divider />

              <Typography variant="subtitle2">Address</Typography>
              <InfoRow label="Street:">{user.address?.address}</InfoRow>
              <InfoRow label="City:">{user.address?.city}</InfoRow>
              <InfoRow label="State:">
                {user.address?.state} ({user.address?.stateCode})
              </InfoRow>
              <InfoRow label="Postal:">{user.address?.postalCode}</InfoRow>
              <InfoRow label="Country:">{user.address?.country}</InfoRow>
              <InfoRow label="Coordinates:">
                {user.address?.coordinates
                  ? `${user.address.coordinates.lat}, ${user.address.coordinates.lng}`
                  : "-"}
              </InfoRow>

              <Divider />

              <Typography variant="subtitle2">Company</Typography>
              <InfoRow label="Company:">{user.company?.name}</InfoRow>
              <InfoRow label="Department:">{user.company?.department}</InfoRow>
              <InfoRow label="Title:">{user.company?.title}</InfoRow>
              {user.company?.address && (
                <>
                  <InfoRow label="Cmp Addr:">
                    {user.company.address.address}
                  </InfoRow>
                  <InfoRow label="Cmp City/State:">{`${user.company.address.city} / ${user.company.address.stateCode}`}</InfoRow>
                </>
              )}

              <Divider />

              <Typography variant="subtitle2">Bank</Typography>
              <InfoRow label="Card Type:">{user.bank?.cardType}</InfoRow>
              <InfoRow label="Card Number:">{user.bank?.cardNumber}</InfoRow>
              <InfoRow label="Expire:">{user.bank?.cardExpire}</InfoRow>
              <InfoRow label="Currency:">{user.bank?.currency}</InfoRow>
              <InfoRow label="IBAN:">{user.bank?.iban}</InfoRow>

              <Divider />

              <Typography variant="subtitle2">Other</Typography>
              <InfoRow label="IP:">{user.ip}</InfoRow>
              <InfoRow label="MAC:">{user.macAddress}</InfoRow>
              <InfoRow label="University:">{user.university}</InfoRow>
              <InfoRow label="Crypto:">
                {user.crypto
                  ? `${user.crypto.coin} (${user.crypto.network})`
                  : "-"}
              </InfoRow>
              <InfoRow label="Wallet:">{user.crypto?.wallet}</InfoRow>
              <InfoRow label="SSN:">{user.ssn}</InfoRow>
              <InfoRow label="EIN:">{user.ein}</InfoRow>
              <InfoRow label="UserAgent:">{user.userAgent}</InfoRow>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* جدول کامل */}
      <Grid item xs={12} md={8}>
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
                    width: 250,
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
