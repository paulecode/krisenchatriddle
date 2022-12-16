import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/users/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import useFetchAllArticle from "app/article/hooks/useFetchAllArticle"
import useFetchAllOpenArticle from "app/article/hooks/useFetchAllOpenArticles"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <button
        onClick={async () => {
          await logoutMutation()
        }}
      >
        Logout
      </button>
    )
  } else {
    return (
      <>
        <Link href={Routes.LoginPage()}>
          <a>
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()

  const articlesOpen = useFetchAllOpenArticle()
  let articles = useFetchAllArticle()

  articles = currentUser ? articles : articlesOpen

  return (
    <Layout>
      <div className="container">
        <main>
          <h1>Home</h1>
          <UserInfo />
          <h3>Articles</h3>
          <ul>
            {articles.map((article) => (
              <li key={`article-${article.id}`}>
                <Link href={`article/${article.id}`}>
                  <a>{article.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  )
}

export default Home
