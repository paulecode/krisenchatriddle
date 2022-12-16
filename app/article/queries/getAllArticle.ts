import db from "db"
import { Article } from "../type"

type GetAllArticleParam = ({}) => Promise<{ id: number; title: string }[]>

const getAllArticle: GetAllArticleParam = async (params) => {
  const article = await db.article.findMany({
    select: { id: true, title: true },
  })

  return article
}

export default getAllArticle
