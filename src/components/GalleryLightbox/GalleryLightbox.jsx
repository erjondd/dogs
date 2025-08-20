// src/components/GalleryLightbox/GalleryLightbox.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./GalleryLightbox.module.scss";
import Skeleton from "@mui/material/Skeleton";

export default function GalleryLightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Filter only valid image URLs (strings)
  const validImages = images?.filter(
    (img) => typeof img === "string" && img.trim() !== ""
  );

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  if (!validImages || validImages.length === 0) return null;
  return (
    <div
      className={styles.gallery}
      // style={{ display: "flex", gap: "50px", flexWrap: "wrap", width: "100%" }}
    >
      {validImages.map((img, i) => (
        <div
          className={styles.image}
          key={`dog-image-${i}`}
          // style={{
          //   width: "calc(33.33% - 34px)",
          //   maxHeight: "350px",
          //   minHeight: "350px",
          //   borderRadius: "5px",
          //   objectFit: "cover",
          // }}
        >
          <LazyLoadImage
            key={i}
            src={img}
            placeholderSrc={
              <Skeleton
                variant="rectangular"
                width="100%"
                height={350}
                sx={{ borderRadius: 2 }}
              />
            }
            effect="blur"
            height="100%"
            width="100%"
            onClick={() => handleImageClick(i)}
          />
        </div>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={validImages.map((img) => ({ src: img }))}
      />
    </div>
  );
}
