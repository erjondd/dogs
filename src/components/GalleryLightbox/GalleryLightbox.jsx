// src/components/GalleryLightbox/GalleryLightbox.jsx
import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./GalleryLightbox.module.scss";
import Skeleton from "@mui/material/Skeleton";

export default function GalleryLightbox({images}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0); // how many images are fully loaded

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
    <div className={styles.gallery}>
      {validImages.map((img, i) => (
        <div className={styles.image} key={`dog-image-${i}`}>
          {i <= loadedCount ? (
            <LazyLoadImage
              src={img}
              effect="blur"
              height="100%"
              width="100%"
              onClick={() => handleImageClick(i)}
              afterLoad={() => setLoadedCount((prev) => prev + 1)} // when loaded, allow next
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{borderRadius: "5px"}}
            />
          )}
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={validImages.map((img) => ({src: img}))}
      />
    </div>
  );
}
