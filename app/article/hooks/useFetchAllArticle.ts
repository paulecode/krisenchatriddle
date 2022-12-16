import { useQuery } from "@blitzjs/rpc"
import getAllArticle from "../queries/getAllArticle"

const useFetchAllArticle = () => {
  const [articles] = useQuery(getAllArticle, {})
  return articles
}

export default useFetchAllArticle
