import React from "react";
import {MDBInput, MDBBtn} from "mdbreact";
import axios from 'axios';
import {Router} from 'react-router-dom'

import Nav from "../nav/nav";


class Form extends React.Component {
    state = {
        memberId:this.props.match.params.memberId
    }
    handleSubmit = (event, requestType) => {
        // event.preventDefault()
        const name = event.target.elements.name_name.value;
        const content = event.target.elements.name_content.value;
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/create', {
                    name: name,
                    content: content
                }).then(res => console.log(res))
                    .catch(error => console.err(error))
            case 'put':
               return axios.put(`http://127.0.0.1:8000/api/update/${this.state.memberId}`, {
                        name: name,
                        content: content
                    }).then(res => console.log(res))
                        .catch(error => console.err(error))
        }
    }
    goBack = () => {
        if (this.props.btnLabel == "update") {
            this.props.history.push(`/member/${this.state.memberId}`);
        }else {
            this.props.history.push('/')
        }

    };

    render() {
        // const testId = this.props.match.params.memberId;
        // alert(testId);
        return (
            <div>
                <Nav {...this.props}></Nav>
                <div className={"container member-edit"}>
                    <form onSubmit={(event) => this.handleSubmit(
                        event,
                        this.props.requestType,
                    )}>
                        <MDBInput name={"name_name"} label="Username" icon="user"/>
                        <MDBInput name={"name_content"} type="textarea" label="About you" rows="5"/>
                        <MDBBtn type={"submit"} rounded outline color="secondary">{this.props.btnLabel} the profile</MDBBtn>
                        <MDBBtn onClick={this.goBack} rounded outline color="primary">go back</MDBBtn>
                    </form>
                </div>
            </div>
        );
    }

}

export default Form;