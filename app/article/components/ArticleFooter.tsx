import useFetchSingleArticle from "../hooks/useFetchSingleArticle"

const ArticleFooter = ({ articleId }: { articleId: number }) => {
  const article = useFetchSingleArticle(articleId)

  return (
    <p>
      Last time updated: <i>{article.updatedAt.toISOString()}</i>
    </p>
  )
}

export default ArticleFooter
