import useFetchSingleArticle from "../hooks/useFetchSingleArticle"
import ArticleAuthor from "./ArticleAuthor"
import ArticleStatus from "./ArticleStatus"
import ArticleTitle from "./ArticleTitle"

const ArticleHeader = ({ articleId }: { articleId: number }) => {
  return (
    <>
      <ArticleAuthor articleId={articleId} />
      <ArticleTitle articleId={articleId} />
      <ArticleStatus articleId={articleId} />
    </>
  )
}

export default ArticleHeader
