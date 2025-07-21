import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";

export default function SingleDogSkeleton() {
  return (
    <Container>
      <section className={styles.singleDog}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <h1>Our Dogs</h1>
          <Skeleton variant="text" width={350} height={30} />
        </div>

        <section className={styles.mainDetails}>
          <div className={styles.left}>
            {/* Image skeleton */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={515}
              sx={{borderRadius: 2}}
            />
            {/* Description skeleton */}
            <Box sx={{pt: 2}}>
              <Skeleton variant="text" width="90%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton variant="text" width="80%" height={20} />
            </Box>
          </div>

          <div className={styles.right}>
            {/* Title and Price */}
            <Skeleton variant="text" width="60%" height={40} sx={{mb: 1}} />
            <Skeleton variant="text" width="40%" height={40} sx={{mb: 3}} />

            {/* Contact Button */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={48}
              sx={{mb: 3, borderRadius: 1}}
            />

            {/* Details list */}
            <div className={styles.detailss}>
              {[
                "SKU",
                "Gender",
                "Age",
                "Size",
                "Color",
                "Vaccinated",
                "Certified",
                "Dewormed",
                "Microchip",
                "Location",
              ].map((label, i) => (
                <div key={i}>
                  <span className={styles.detleft}>
                    <Skeleton variant="text" width={120} height={20} />
                  </span>
                  <span className={styles.detright}>
                    <Skeleton variant="text" width={180} height={20} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.gallery}>
          {/* Gallery placeholders - 3 items */}
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width="30%"
              height={350}
              sx={{borderRadius: 2}}
            />
          ))}
        </section>

        <section className={styles.seeMore}>
          <h2>
            <Skeleton variant="text" width={200} height={40} />
          </h2>
          <div className={styles.moreGrid}>
            <div className={styles.dogList}>
              {/* Show 4 skeleton cards placeholders */}
              {[...Array(4)].map((_, i) => (
                <Box key={i} sx={{width: "calc(25% - 15px)"}}>
                  <Skeleton
                    variant="rectangular"
                    height={300}
                    sx={{borderRadius: 2, mb: 2}}
                  />
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                  <Skeleton variant="text" width="40%" />
                </Box>
              ))}
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
}
