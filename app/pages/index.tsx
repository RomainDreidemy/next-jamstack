import styles from '../styles/Home.module.css'
import { Trailer } from "../interfaces/trailer.interface";
import { Directus } from "@directus/sdk";
import TrailerCard from "../components/trailer-card";
import Navabar from "../components/navabar";

interface HomeProps {
  trailers: Trailer[]
}

const Home = ({ trailers }: HomeProps) => {
  return (
    <div className="container mt-5">
      <h1 className="title">Liste des bandes annonces</h1>

      <div className="columns is-mobile">
        {trailers.map((trailer) => (<TrailerCard key={trailer.id} trailer={trailer} />))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const directus = new Directus('http://directus:8055');

  const response = await directus.items('trailers').readByQuery()

  return {
    props: { trailers: response.data },
  };
}

export default Home
