import {Routes, Route} from "react-router-dom"
import {Home, CreatePost, PageNotFound} from "../Pages"
import {ProtectedRoute} from "./ProtectedRoute"
export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="create"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
