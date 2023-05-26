import {useTitle} from "../hooks"
import NotFound from "../assets/erik-mclean-sxiSod0tyYQ-unsplash.jpg"
import {Link} from "react-router-dom"
export const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
    <main>
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-2xl font-semibold">Opps, Page Not Found</h1>
        <img className="max-w-lg rounded" src={NotFound} alt="not found" />
        <button className=" w-20  bg-blue-500 py-2 px-3 text-white  rounded">
          <Link to={"/"}>Home</Link>
        </button>
      </div>
    </main>
  )
}
