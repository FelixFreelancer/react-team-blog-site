import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

//import components
import Team from "./components/team/team";
import Nav from "./components/nav";
import Auth from "./components/auth";
import Home from "./components/home/home";
import Admin from "./components/admin/admin";
import Member from "./components/member/member";
import Form from "./components/form/form";
import * as actions from './store/actions/authAction'
class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        // console.log(this.props.isAuthenticated)
        return (
            <div className="App">
                <BrowserRouter  >
                    <div >
                        {/*<Nav></Nav>*/}
                        {/*<Route exact path='/' component={Home} />{" "}*/}
                        <Route exact path='/' render = { () => <Home {...this.props} />} /> {" "}
                        <Route exact path='/login' component={Auth} />{" "}
                        {/*<Route exact path={"/member/:memberId"} component={Member}  />{" "}*/}
                        <Route exact path={"/member/:memberId"} render = { (props) => <Member {...this.props} {...props} />}  />{" "}
                        <Route exact path={"/member/:memberId/update"}
                               location={this.props.location}
                               render = {props => <Form {...props} requestType="put" btnLabel="update"/> }
                        />{" "}
                        <Route exact path={"/create"} render = {props => <Form {...this.props} {...props} requestType="post" btnLabel="create"/> } />{" "}
                        <Route exact path={"/admin"} component={Admin} />{" "}
                        {/*<Route exact path={"/delete/:memberId"} component={Admin} />{" "}*/}
                    </div>
                    {/*component={() => <Dashboard isAuthed={true}*/}
                    </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
