import { Trailer } from "../interfaces/trailer.interface";
import { Directus } from "@directus/sdk";
import TrailerCard from "../components/trailer-card";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [trailers, setTrailers] = useState<Trailer[]>([])

  const router = useRouter()

  const { q } = router.query

  useEffect(() => {
    (async () => {
      const directus = new Directus('http://localhost:8052');
      const response = await directus.items('trailers').readByQuery({ search: q })
      setTrailers(response.data)
    })()
  }, [q])

  return (
    <div className="container mt-5">
      <h1 className="title">Liste des bandes annonces rechechés</h1>

      <div className="columns is-mobile is-multiline">
        {trailers.map((trailer) => (<TrailerCard key={trailer.id} trailer={trailer} />))}
      </div>
    </div>
  )
}

export default Search
