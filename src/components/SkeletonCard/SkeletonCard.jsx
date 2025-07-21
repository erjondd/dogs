import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import styles from "./index.module.scss";

export default function SkeletonCard() {
  return (
    <Box className={styles.card}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={260}
        animation="wave"
        sx={{
          borderRadius: "8px",
          maxHeight: 260,
          objectFit: "cover",
          "@media(max-width:1024px)": {
            maxWidth: 209,
            maxHeight: 209,
          },
          "@media(max-width:600px)": {
            maxWidth: 153,
            maxHeight: 153,
          },
          bgcolor: "#2e2d2d",
        }}
      />

      <Box className={styles.content}>
        <Skeleton
          variant="text"
          width="70%"
          height={24}
          animation="wave"
          sx={{bgcolor: "#2e2d2d", marginBottom: "10px"}}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}>
          <Skeleton
            variant="text"
            width="45%"
            height={16}
            animation="wave"
            sx={{bgcolor: "#2e2d2d"}}
          />
          <Skeleton
            variant="text"
            width="45%"
            height={16}
            animation="wave"
            sx={{bgcolor: "#2e2d2d"}}
          />
        </Box>

        <Skeleton
          variant="text"
          width="40%"
          height={20}
          animation="wave"
          sx={{bgcolor: "#2e2d2d"}}
        />
      </Box>
    </Box>
  );
}
