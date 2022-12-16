import useFetchSingleArticle from "../hooks/useFetchSingleArticle"

const ArticleStatus = ({ articleId }: { articleId: number }) => {
  const article = useFetchSingleArticle(articleId)
  if (!article.type) return null
  return (
    <p>
      Status: <i>{article.type.name}</i>
    </p>
  )
}

export default ArticleStatus
