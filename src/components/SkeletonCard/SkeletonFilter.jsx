import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import styles from "./index.module.scss";

export default function SkeletonFilter() {
  return (
    <Box className={styles.card2}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={50}
        animation="wave"
      />
    </Box>
  );
}
