import React from "react"
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Bookslots from "./components/Bookslots";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
 // useRouteLoaderData
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import ViewBooked from "./components/ViewBooked";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gas Booking</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Register" >Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Bookslots">Bookslots</Nav.Link>
            <Nav.Link as={Link} to="/ViewBooked">Bookedslots</Nav.Link>
          </Nav>
          <Nav>
        <NavDropdown title="User">

          <NavDropdown.Item >Logout</NavDropdown.Item>

        </NavDropdown>
      </Nav>
        </Container>
     </Navbar>
    </>
    <div>
      <Routes>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bookslots" element={<Bookslots/>}/>
        <Route path="/ViewBooked" element={<ViewBooked/>}/>
 
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
)
}

 


export default App;
