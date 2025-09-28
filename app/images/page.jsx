"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Modal, Typography } from "@mui/material";
import Link from "next/link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};

export default function StandardImageList() {
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = React.useState({ add: null, id: null });

  const handleOpen = (item) => {
    setSrc({ add: item.img, id: item.id });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <ImageList
      sx={{ width: 800, height: 600, margin: "auto" }}
      cols={3}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.id}
          onClick={() => handleOpen(item)}
          sx={{ cursor: "pointer" }}
        >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.id}
            loading="lazy"
          />
        </ImageListItem>
      ))}

      <Modal open={open} onClose={handleClose}>
        <Link
          href={{
            pathname: "/images/image",
            query: { img: src.add, id: src.id },
          }}
          passHref
        >
          <Box sx={style}>
            {src.add && (
              <>
                <img
                  src={`${src.add}?w=800&fit=crop&auto=format`}
                  alt={src.id}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6" textAlign="center">
                  Image ID: {src.id}
                </Typography>
              </>
            )}
          </Box>
        </Link>
      </Modal>
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: "1",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    id: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    id: "4",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    id: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    id: "6",
  },
];
