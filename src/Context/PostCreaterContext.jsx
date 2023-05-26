import {createContext, useContext} from "react"
import {useEffect, useState} from "react"
import {addDoc, doc, onSnapshot, deleteDoc} from "firebase/firestore"
import {db, colRef, auth, provider} from "../Firebase/server"
import {signOut, signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"

export const PostContext = createContext()

export const FireBaseContext = ({children}) => {
  const [posts, setPosts] = useState(new Array(3).fill(false))

  useEffect(() => {
    onSnapshot(colRef, (data) => {
      const getPosts = []
      data.docs.forEach((doc) => {
        getPosts.push({...doc.data(), id: doc.id})
      })
      setPosts(getPosts === [] ? undefined : getPosts)
    })
  }, []) //eslint-disable-line
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")))
  }, [])
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const handelSubmit = () => {
    signInWithPopup(auth, provider)
      .then((credentials) => {
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            email: credentials.user.email,
            image: credentials.user.photoURL,
            userName: credentials.user.displayName,
          })
        )
        setUser(JSON.parse(sessionStorage.getItem("user")))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handelLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user")
        setUser(JSON.parse(sessionStorage.getItem("user")))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const navigate = useNavigate()
  const createPost = (e) => {
    e.preventDefault()
    addDoc(colRef, {
      title: e.target.title.value,
      post: e.target.post.value,
      poster: user.userName,
    })
      .then(() => {
        e.target.reset()
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handelDelete = (id) => {
    const docRef = doc(db, "posts", id)
    deleteDoc(docRef)
      .then(() => {
        console.log("delete")
      })
      .catch((error) => {})
  }
  const value = {
    handelSubmit,
    handelLogout,
    user,
    posts,
    createPost,
    handelDelete,
  }
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export const useFireBaseContext = () => {
  return useContext(PostContext)
}
