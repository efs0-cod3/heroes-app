import { useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../../selectors/getHeroById";
import { useMemo } from "react";

export const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroeById(heroId), [heroId])
  const { id, superhero, alter_ego, first_appearance, characters, publisher } =
    hero;

  if (!hero) {
      return navigate("/");
  }

  const handleReturn = () => {
      navigate(-1)
  }

  return (
    <div className="container mt-5">
      <h1>{superhero}</h1>
      <hr/>
    <div className="container row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>

      <div className="col-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter-Ego: {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First appearance: {first_appearance}</b>
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>Return</button>
      </div>
    </div>
    </div>
  );
};
