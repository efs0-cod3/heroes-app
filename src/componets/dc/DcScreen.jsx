import { HeroList } from "../ui/heroes/HeroList"

export const DcScreen = () => {
  return (
    <div className="container mt-2">
        <h1>DC</h1>
        <hr/>
        <HeroList publisher={"DC Comics"} />
    </div>
  )
}
