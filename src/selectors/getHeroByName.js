
import { heroes } from "../data/heroes"

export const getHeroByName = (hero = '') => {
if(hero === "") {
    return []
}
hero = hero.toLocaleLowerCase()
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(hero) )

}

