import React, {StrictMode} from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "react-loading-skeleton/dist/skeleton.css"
import {SkeletonTheme} from "react-loading-skeleton"
import "./style.css"
import {BrowserRouter as Router} from "react-router-dom"
import {FireBaseContext} from "./Context/PostCreaterContext"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Router>
      <FireBaseContext>
        <SkeletonTheme highlightColor="#1EBBD7">
          <App />
        </SkeletonTheme>
      </FireBaseContext>
    </Router>
  </StrictMode>
)
