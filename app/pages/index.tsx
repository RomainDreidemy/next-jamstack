import { Trailer } from "../interfaces/trailer.interface";
import TrailerPage  from "../components/trailer-page";
import { TrailerApi } from "../api/trailer-api";
import Api from "../drivers/Api";

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

  const response = await TrailerApi.byPage(Api.serverSideDriver(), 1)

  const totalCount: number = response.meta?.total_count || 1
  const pageCount: number = Math.round((totalCount + limit) / limit)

  return {
    props: { trailers: response.data, pageCount: pageCount },
  };
}

export default Home
