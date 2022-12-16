import useFetchSingleArticle from "../hooks/useFetchSingleArticle"

const ArticleTitle = ({ articleId }: { articleId: number }) => {
  const article = useFetchSingleArticle(articleId)

  return <h1>{article.title}</h1>
}

export default ArticleTitle
