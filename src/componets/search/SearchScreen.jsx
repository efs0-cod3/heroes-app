import React from "react";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../ui/heroes/HeroCard";

export const SearchScreen = () => {
    const heroesFiltered = heroes

    // cosnt handleSearch = () => {

    // }

  return (
    <div>
      <h1>Search screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form>
            <input
              type="text"
              placeholder="Find your hero"
              className="Form control"
            />
            <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
            <h4>Results</h4>
            <hr/>
            {
                heroesFiltered.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
      </div>
    </div>
  );
};
