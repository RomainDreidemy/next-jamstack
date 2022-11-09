export interface Trailer {
  id: number
  title: string
  synopsis: string
  url: string
  image: string
  rating: number
  jean: number
}

export interface TrailerResponse {
  data: Trailer[]
}
