import { useQuery } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import getSingleArticle from "../queries/getSingleArticle"

const useFetchSingleArticle = (id: number) => {
  const [article] = useQuery(getSingleArticle, { id: id })
  if (!article) throw new NotFoundError(`Article with id ${id} not found`)
  return article
}

export default useFetchSingleArticle
