import { Carousel } from "@material-tailwind/react";
import { useContext } from "react";
import { developerContext } from "../Context/DeveloperContext";

export function Carousal() {
  const { developerContent } = useContext(developerContext);
  return (
    <Carousel className="rounded-xl">
      {developerContent?.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Carousel>
  );
}
