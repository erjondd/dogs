// src/components/GalleryLightbox/GalleryLightbox.jsx
import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryLightbox({images}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <div style={{display: "flex", gap: "50px", flexWrap: "wrap"}}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`gallery ${i}`}
          style={{cursor: "pointer"}}
          onClick={() => handleImageClick(i)}
        />
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({src: img}))}
      />
    </div>
  );
}
