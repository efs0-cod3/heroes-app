import { useMemo } from "react";
import { getHeroesByPublisher } from "../../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = (publisher) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])

  return (
    <div className="row d-flex justify-content-center g-2 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};
