import Logo from "../assets/post-creater-high-resolution-logo-color-on-transparent-background.png"
import {NavLink} from "react-router-dom"
import {useFireBaseContext} from "../Context/PostCreaterContext"
import {Google} from "react-bootstrap-icons"

export const Header = () => {
  const {handelSubmit, handelLogout, user} = useFireBaseContext()
  return (
    <div>
      <header>
        <div className="flex py-3 m-3 justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="w-20" src={Logo} alt="Logo" />
          </div>
          <nav className="flex gap-2">
            <NavLink
              to={"/"}
              className="visited:bg-slate-300  p-2 rounded font-semibold"
              end>
              Home
            </NavLink>
            {user && (
              <NavLink
                to={"/create"}
                className="visited:bg-slate-300 p-2 rounded font-semibold   ">
                Create
              </NavLink>
            )}
            {user && (
              <button
                onClick={handelLogout}
                className="bg-main text-white p-2 rounded font-semibold ">
                <img
                  src={user.image}
                  className=" inline w-5 mr-2 rounded-full"
                  alt="user"
                />
                Logout
              </button>
            )}
            {!user && (
              <button
                onClick={handelSubmit}
                className="bg-main text-white p-2 rounded font-semibold ">
                <Google className="inline mr-1 w-5" />
                Login
              </button>
            )}
          </nav>
        </div>
      </header>
    </div>
  )
}
