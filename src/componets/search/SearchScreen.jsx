import { HeroCard } from "../ui/heroes/HeroCard";
import { useForm } from "../../hook/useForm";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [{ hero }, handleInputChange, reset] = useForm({
    hero: "",
  });

  const [heroesFiltered, setHeroesFiltered] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (hero.trim().length <= 1) {
      return;
    }

    setSearchParams({ q: hero });

    setHeroesFiltered(getHeroByName(hero));
    reset();


  };

  return (
    <div className="container">
      <h1>Search screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              name="hero"
              value={hero}
              autoComplete="off"
              autoCapitalize="on"
              className="Form control"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {  (!searchParams.get('q') && heroesFiltered.length) === 0 && (
            <div className="alert alert-info">Busca un heroe</div>
          )}
          
          {( searchParams.get('q')  && heroesFiltered.length === 0) && (
            <div className="alert alert-danger">There is no hero named <strong><em>{searchParams.get('q')}</em></strong></div>
          )}

    <div className="animate__animated animate__fadeIn">

          {heroesFiltered?.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
              ))}
              </div>

        </div>
      </div>
    </div>
  );
};
