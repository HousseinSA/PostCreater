import {useFireBaseContext} from "../Context/PostCreaterContext"
import {useTitle} from "../hooks"

export const CreatePost = () => {
  const {createPost} = useFireBaseContext()
  useTitle("Create-Post")
  return (
    <main>
      <form onSubmit={createPost} className=" m-3 md:max-w-lg">
        <div className="mb-6">
          <label
            htmlFor="title"
            className=" text-2xl block mb-2 font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="post"
            className=" text-2xl block mb-2  font-medium text-gray-900 dark:text-white">
            Post
          </label>
          <textarea
            rows={10}
            name="post"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white  bg-main focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Submit
        </button>
      </form>
    </main>
  )
}
