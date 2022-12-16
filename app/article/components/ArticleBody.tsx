import useFetchSingleArticle from "../hooks/useFetchSingleArticle"

const ArticleBody = ({ articleId }: { articleId: number }) => {
  const article = useFetchSingleArticle(articleId)

  return <p>{article.body}</p>
}

export default ArticleBody
