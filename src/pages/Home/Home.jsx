import DogPosts from "../../components/Homepage/DogPosts/DogPosts";
import HeroSlider from "../../components/Homepage/HeroSlider/HeroSlider";
import OurStory from "../../components/Homepage/OurStory/OurStory";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <DogPosts />
      <OurStory />
    </>
  );
}
