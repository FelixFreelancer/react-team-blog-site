import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa} from 'mdbreact';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux'

import * as actions from "../../store/actions/authAction";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgPink = {backgroundColor: '#ec407a'}
        console.log('nav js'+this.props.isAuthenticated)
        return(
            <div>

                    <Navbar style={bgPink} dark expand="md" scrolling fixed="top" className={"navbar"}>
                        <NavbarBrand href="/">
                            <strong>Home</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={ this.onClick } />
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left>
                               {
                                   this.props.isAuthenticated &&
                                   <NavItem>
                                        <NavLink to="/create">Add My Profile</NavLink>
                                   </NavItem>
                               }
                                <NavItem>
                                    <NavLink to="/admin">Admin</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Options</NavLink>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="facebook" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="twitter" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="instagram" /></NavLink>
                                </NavItem>
                                {
                                    this.props.isAuthenticated ?
                                        <NavItem onClick={this.props.logout}>
                                            <NavLink to={"#"}>Logout</NavLink>
                                        </NavItem>
                                        :
                                        <NavItem>
                                            <NavLink to="/login">Login</NavLink>
                                        </NavItem>
                                }

                            </NavbarNav>
                        </Collapse>
                    </Navbar>

            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Nav);
