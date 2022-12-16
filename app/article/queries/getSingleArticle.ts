import db from "db"
import { Article } from "../type"

type GetSingleArticleParam = ({ id }) => Promise<Article | null>

const getSingleArticle: GetSingleArticleParam = async (params) => {
  const article = await db.article.findFirst({
    where: { id: params.id },
    select: { title: true, body: true, updatedAt: true, author: true, type: true },
  })

  return article
}

export default getSingleArticle
