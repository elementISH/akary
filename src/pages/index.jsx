// import { getUnits } from "@/lib/mongo/units";
import Carousel from "@/components/swiper";
import Stats from "@/components/generic/stats";
import Services from "@/components/home/services";
import AboutDetails from "@/components/generic/about";

export default function Home({ units }) {
  let imgs = [
    "/images/Scroll Group 1.png",
    "/images/Scroll Group 1.png",
    "/images/Scroll Group 1.png",
  ];
  return (
    <>
      <Carousel imgs={imgs} />
      <Services />
      <AboutDetails />
      <Stats />
    </>
  );
}
