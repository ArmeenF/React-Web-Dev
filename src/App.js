import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap