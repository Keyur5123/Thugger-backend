import React from 'react'
import {Nav,Navbar,Container, NavDropdown} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import LinkContainer from "react-router-bootstrap/lib/LinkContainer"
import { logout } from '../actions/userAction'
import SearchBox from './SearchBox'
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const logoutHandler=()=>{
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
              <Navbar.Brand >Thugger</Navbar.Brand>
          </LinkContainer>  
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        < Navbar.Collapse id="basic-navbar-nav">
            <SearchBox  />
    <Nav className="ml-auto">
    <LinkContainer to="/cart">
      <Nav.Link >Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
      </LinkContainer>
      {userInfo? (<NavDropdown title={userInfo.name} id="adminmenu">
              <LinkContainer to="/profile"><NavDropdown.Item>
                    Profile
                </NavDropdown.Item></LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
      </NavDropdown>):
      <LinkContainer to="/login">
      <Nav.Link >Sign In <i className="fas fa-user"></i></Nav.Link>
      </LinkContainer>
      }
      {userInfo && userInfo.isAdmin && (
      <NavDropdown title="Admin" id="adminmenu">
              <LinkContainer to="/admin/userlist"><NavDropdown.Item>
                    Users
                </NavDropdown.Item></LinkContainer>
                <LinkContainer to="/admin/productlist"><NavDropdown.Item>
                    Product
                </NavDropdown.Item></LinkContainer>
                <LinkContainer to="/admin/orderlist"><NavDropdown.Item>
                    Orders
                </NavDropdown.Item></LinkContainer>
      </NavDropdown>)
      }
      
    </Nav>
    
  </Navbar.Collapse>
        </Container>
</Navbar>
           
        </header>
    )
}

export default Header
