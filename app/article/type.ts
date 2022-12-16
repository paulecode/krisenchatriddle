export type Article = {
  title: string
  body: string
  author: string
  updatedAt: Date
  type: ArticleType | null
}

export type ArticleType = {
  id: number
  name: string
}
