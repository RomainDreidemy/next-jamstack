import { Trailer } from "../interfaces/trailer.interface";
import { Directus } from "@directus/sdk";
import TrailerPage  from "../components/trailer-page";

interface HomeProps {
  trailers: Trailer[]
  pageCount: number
}

const Home = ({ trailers, pageCount }: HomeProps) => {
  return (
    <TrailerPage trailers={trailers} pageCount={pageCount} page={1} />
  )
}



export async function getStaticProps() {
  const limit = 12

  const directus = new Directus('http://directus:8055');

  const response = await directus.items('trailers').readByQuery({ offset: 1, limit, sort: ['-date_created'], meta: ['total_count'] })

  const totalCount: number = response.meta?.total_count || 1
  const pageCount: number = Math.round((totalCount + limit) / limit)

  return {
    props: { trailers: response.data, pageCount: pageCount },
  };
}

export default Home
