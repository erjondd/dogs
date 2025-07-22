import DogPosts from "../../components/Homepage/DogPosts/DogPosts";
import Hero from "../../components/Homepage/Hero/Hero";
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
