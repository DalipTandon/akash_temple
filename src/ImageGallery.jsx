import { ParallaxScroll } from "./components/ui/parallax-scroll";  // Adjust the path according to your project structure
import culture from "../img/culture.jpg";
import langarsewa from "../img/langarsewa.jpg";
import schoolpic from "../img/schoolpic.jpg";
import murtisathpna from "../img/murtisthpana.jpg";
import front1 from "../img/front-2.jpg"
import front4 from "../img/front-4.jpg";
import front3 from "../img/front3.jpg";
export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
    culture,
    langarsewa,
    schoolpic,
    murtisathpna,
    front1,
    front4,
    front3,
    culture,
    langarsewa,
    schoolpic,
    murtisathpna,
    front1
];
