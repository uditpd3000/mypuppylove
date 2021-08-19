import React, { Component } from 'react';
import {Navbar,NavbarBrand, Jumbotron,NavItem,NavbarToggler,Collapse,Nav,Modal,ModalBody,Button,Form,FormGroup,Label,Input,ModalHeader} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import pic from '../assets/cover.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    
        render() {
            return(
            
                <Navbar expand="md" className="navbar-light navv">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/"><img src={pic} style={{height:'50px'}}/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="navvv">
                            
                            <Nav className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to='#'> Help</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='#'> About us</NavLink>
                            </NavItem>
                            </Nav>
                           
                        </Collapse>
                    </div>
                    
                </Navbar>  
           
    );
    }
}
export default Header;

