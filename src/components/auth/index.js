import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {render} from 'react-dom'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import {Spinner} from 'mdbreact'
import {connect} from 'react-redux'

import LoginRegister from './auth';
import * as actions from '../../store/actions/authAction'
const styles = theme => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        padding: 20
    },
    footer: {
        padding: '10px'
    },
    controls: {
        margin: [[theme.spacing.unit * 2, 0]],
        padding: theme.spacing.unit
    }
});

class Demo extends Component {
    state = {
        disableLocal: false,
        disableRegister: false
    };

    render() {
        const {classes} = this.props;

        const header = (
            <AppBar position="static">
                <Toolbar>
                    <Typography className={"login-welcome"} variant="title">
                        <Link to={"/"}>Welcome</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        );

        // const footer = (
        //     <div className={classes.footer}>
        //         <Typography variant="caption" align="center">v0.9</Typography>
        //     </div>
        // );
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
            <div className={classes.root}>
                {errorMessage}
                {
                    this.props.loading?
                        <Spinner big />
                        :
                    <div>
                        <CssBaseline/>
                        <LoginRegister header={header}
                                       onLogin={this.handleLogin}
                                       onLoginWithProvider={this.handleLoginWithProvider}
                                       onRegister={this.handleRegister}
                                       onRegisterWithProvider={this.handleRegisterWithProvider}
                                       disableLocal={this.state.disableLocal}
                                       disableRegister={this.state.disableRegister}
                        />
                    </div>

                }

            </div>
        );
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    handleLogin = content => {
        // alert(`Logging in with content '${JSON.stringify(content)}'`);
        console.log(content)
        this.props.onLogin(content.username, content.password)
        // this.props.history.push('/')
    };

    handleLoginWithProvider = providerId => {
        alert(`Logging in with provider '${providerId}'`);
    };

    handleRegister = content => {
        // alert(`Registering with content '${JSON.stringify(content)}'`);
        console.log(content)
        this.props.onRegister(content.username, content.email, content.password, content.repeated_password)
        // this.props.history.push('/')
    };

    handleRegisterWithProvider = providerId => {
        alert(`Registering with provider '${providerId}'`);
    };
}

const DemoWithStyle = withStyles(styles)(Demo);
const mapStateToProps = state => {
    return {
        loading: state.loading,
        error  : state.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) => dispatch ( actions.authLogin(username, password)),
        onRegister:(username,email, password, repeated_password) => dispatch(
            actions.authSignUp(username, email, password, repeated_password)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DemoWithStyle);
