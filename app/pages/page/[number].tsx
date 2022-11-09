import { Trailer } from "../../interfaces/trailer.interface";
import { generateTrailerPagesPaths, getTrailerPageData } from "../../lib/trailer";
import TrailerPage from "../../components/trailer-page";

interface HomeProps {
  trailers: Trailer[]
  pageCount: number
  page: number
}

const Home = ({ trailers, pageCount, page }: HomeProps) => {
  return <TrailerPage trailers={trailers} pageCount={pageCount} page={page} />
}

export async function getStaticPaths() {
  const paths = await generateTrailerPagesPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const data = await getTrailerPageData(params.number);
  return {
    props: {...data, page: params.number}
  }
}

export default Home
