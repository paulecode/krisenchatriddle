import { useQuery } from "@blitzjs/rpc"
import getAllOpenArticle from "../queries/getAllOpenArticle"

const useFetchAllArticle = () => {
  const [articles] = useQuery(getAllOpenArticle, {})
  return articles
}

export default useFetchAllArticle
