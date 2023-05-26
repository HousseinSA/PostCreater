import {useFireBaseContext} from "../Context/PostCreaterContext"
import {PostCard} from "../components"
import {SkeletonCard} from "../components/SkeletonCard"
import {useTitle} from "../hooks"
export const Home = () => {
  useTitle("Home")
  const {posts} = useFireBaseContext()
  return (
    <main>
      {!posts && <h1 className="text-2xl">Could Not Fetch Data</h1>}
      <div className="my-3">
        {posts &&
          posts.map((post, index) => {
            return post ? (
              <PostCard key={post.id} post={post} />
            ) : (
              <SkeletonCard key={index} />
            )
          })}
      </div>
    </main>
  )
}
