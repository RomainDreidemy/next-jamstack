import { TrailerApi } from "../api/trailer-api";
import Api from "../drivers/Api";

export async function getTrailerData(id: number) {
  const trailer = await TrailerApi.read(Api.serverSideDriver(), id)
  return {
    id,
    ...trailer,
  };
}

export async function generateTrailerPath() {
  const response = await TrailerApi.index(Api.serverSideDriver())
  return response.data?.map((trailer) => (`/trailers/${trailer?.id}`)) || []
}

export async function generateTrailerPagesPaths() {
  const response = await TrailerApi.index(Api.serverSideDriver())

  const pageCount = Math.ceil((response.meta?.total_count || 1) / 12)

  return Array.apply(null, {length: pageCount}).map((value, index) => {
    return `/page/${index + 1}`
  })
}

export async function getTrailerPageData(page: number) {
  const response = await TrailerApi.byPage(Api.serverSideDriver(), page)
  const pageCount = Math.round(((response.meta?.total_count || 1) + 12) / 12)
  return {
    trailers: response.data,
    pageCount
  }
}
