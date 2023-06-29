import { HeroList } from "../ui/heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="container mt-2">
      MarvelScreen
      <hr />
      <div className="">
        <HeroList publisher = {"Marvel Comics"} />
      </div>
    </div>
  );
};
