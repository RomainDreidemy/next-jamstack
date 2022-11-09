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
