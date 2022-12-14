import { Directus } from "@directus/sdk";

export const TrailerApi = {
  byPage: async (driver: Directus<any>, page: number) => (await driver.items('trailers').readByQuery({ offset: (12 * +page - 12), limit: 12, sort: ['-date_created'], meta: "total_count" })),
  // @ts-ignore
  index: async (driver: Directus<any>) => (await driver.items('trailers').readByQuery({ meta: ['total_count']})),
  read: async (driver: Directus<any>, id: number) => (await driver.items('trailers').readOne(id)),
  update: async (driver: Directus<any>, id: number, params: object) => (await driver.items('trailers').updateOne(id, params)),
}
