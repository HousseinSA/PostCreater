import Skeleton from "react-loading-skeleton"
export const SkeletonCard = () => {
  return (
    <div className=" p-3 rounded border-b bg-slate-50 shadow-sm hover:bg-slate-100 my-2 ">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="my-2 text-2xl w-full">{<Skeleton />}</h1>
          <p className="my-2 ">{<Skeleton width={100} count={3}/>}</p>
          <span className="rounded p-2 font-semibold  bg-slate-200">
            {<Skeleton />}
          </span>
        </div>
        {<div className="place-self-end cursor-pointer">{<Skeleton />}</div>}
      </div>
    </div> 
  )
}
