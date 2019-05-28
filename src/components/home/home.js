import React, {Component} from 'react';
import Team from "../team/team";
import Nav from "../nav/nav";
import {Spinner} from "mdbreact";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        console.log(this.props.isAuthenticated);
        return (
           <div  >
               <Nav {...this.props}>
                   {/*componentClass={Link} href="/"  to="/" {...this.props}*/}
               </Nav>
               <Team {...this.props}>

               </Team>

           </div>
        );
    }
}

export default Home;
