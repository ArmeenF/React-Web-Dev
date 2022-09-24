import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Website Development</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Auth">Authentication</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default App

// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap