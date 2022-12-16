import ArticleBody from "app/article/components/ArticleBody"
import ArticleFooter from "app/article/components/ArticleFooter"
import ArticleHeader from "app/article/components/ArticleHeader"
import useFetchSingleArticle from "app/article/hooks/useFetchSingleArticle"
import Link from "next/link"
import { useRouter } from "next/router"

const Article = () => {
  const router = useRouter()
  const { articleId } = router.query

  return (
    <>
      <Link href="/">
        <a>⬅ Home</a>
      </Link>
      <ArticleHeader articleId={Number(articleId)} />
      <ArticleBody articleId={Number(articleId)} />
      <ArticleFooter articleId={Number(articleId)} />
    </>
  )
}

export default Article
