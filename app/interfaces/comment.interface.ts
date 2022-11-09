export interface Comment {
  id: number
  pseudo: string
  body: string
  rating: string
  trailer: number
}

export interface CommentCreate {
  pseudo: string
  body: string
  rating: number
}
