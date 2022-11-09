import { Directus } from "@directus/sdk";
import { DirectusCollections } from "../interfaces/collection.interface";
import { CommentCreate, Comment } from "../interfaces/comment.interface";

export const CommentApi = {
  byTrailer: async (driver: Directus<any>, trailerId: number) => (await driver.items<DirectusCollections, Comment[]>('comments').readByQuery({ filter: { trailer: trailerId } })),
  avgByTrailer: async (driver: Directus<any>, trailerId: number) => (await driver.items<DirectusCollections, Comment[]>('comments').readByQuery({ filter: { trailer: trailerId }, aggregate: { avg: 'rating'} })),
  create: async (driver: Directus<any>, params: CommentCreate) => (await driver.items('comments').createOne(params))
}
