import { Directus } from "@directus/sdk";

export async function getTrailerData(id: number) {
  const directus = new Directus('http://directus:8055');
  const trailer = await directus.items('trailers').readOne(id)
  return {
    id,
    ...trailer,
  };
}

export async function generateTrailerPath() {
  const directus = new Directus('http://directus:8055');
  const response = await directus.items('trailers').readByQuery({ fields: ['id']})
  return response.data?.map((trailer) => (`/trailers/${trailer.id}`)) || []
}

export async function generateTrailerPagesPaths() {
  const directus = new Directus('http://directus:8055');
  const response = await directus.items('trailers').readByQuery({ meta: ['total_count']})

  const pageCount = Math.round(((response.meta?.total_count || 1) + 12) / 12)

  const paths = Array.apply(null, {length: pageCount}).map((value, index) => {
    return `/page/${index + 1}`
  })

  return paths
}

export async function getTrailerPageData(page: number) {
  const directus = new Directus('http://directus:8055');
  const response = await directus.items('trailers').readByQuery({ offset: (12 * +page - 12), limit: 12, sort: ['-date_created'], meta: "total_count" })
  const pageCount = Math.round(((response.meta?.total_count || 1) + 12) / 12)
  return {
    trailers: response.data,
    pageCount
  }
}
