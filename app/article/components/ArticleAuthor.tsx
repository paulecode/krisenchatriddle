import useFetchSingleArticle from "../hooks/useFetchSingleArticle"

const ArticleAuthor = ({ articleId }: { articleId: number }) => {
  const article = useFetchSingleArticle(articleId)
  return (
    <p>
      Author: <strong>{article.author}</strong>
    </p>
  )
}

export default ArticleAuthor
