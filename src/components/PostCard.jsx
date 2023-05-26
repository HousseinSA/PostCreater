import {useFireBaseContext} from "../Context/PostCreaterContext"
import {Trash} from "react-bootstrap-icons"
export const PostCard = ({post: {id, title, post, poster}}) => {
  const {handelDelete, user} = useFireBaseContext()
  return (
    <div className=" p-3 rounded border-b bg-slate-50 shadow-sm hover:bg-slate-100 my-2 ">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="my-2 text-2xl capitalize">{title}</h1>
          <p className="my-2 ">{post}</p>
          <span className="rounded text-xs font-bold p-2 my-2 inline-block   bg-slate-200">
            {poster}
          </span>
        </div>
        {user && poster === user.userName && (
          <div
            onClick={() => handelDelete(id)}
            className="place-self-end cursor-pointer">
            <Trash color="red" />
          </div>
        )}
      </div>
    </div>
  )
}
