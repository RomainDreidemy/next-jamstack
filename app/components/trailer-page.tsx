import { Trailer } from "../interfaces/trailer.interface";
import TrailerCard from "../components/trailer-card";
import Link from "next/link";

interface HomeProps {
  trailers: Trailer[]
  pageCount: number
  page: number
}

const TrailerPage = ({ trailers, pageCount, page }: HomeProps) => {
  return (
    <div className="container mt-5">
      <h1 className="title">Liste des bandes annonces</h1>

      <div className="columns is-mobile is-multiline">
        {trailers.map((trailer) => (<TrailerCard key={trailer.id} trailer={trailer} />))}
      </div>

      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {Array.apply(null, {length: pageCount}).map((value, index) => (
            <li key={index}>
              <Link href={`/page/${index + 1}`} className={`pagination-link ${((!page && index + 1 === 1) || index + 1 === +page) && 'is-current'}`} aria-label={`Page ${index + 1}`} aria-current="page">{index + 1}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TrailerPage
