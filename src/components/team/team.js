import React, {Component} from 'react';
import axios from "axios";
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCol,
    MDBCardImage,
    MDBView,
    MDBMask,
    MDBCardTitle,
    MDBCardText
} from "mdbreact";

//custom import
import './team.css'
class Team extends Component {
    state = {
        members: []
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api")
            .then( res => {
            this.setState({
                members: res.data
            });
            // console.log(res.data)
        })

    }

    render() {
        return (
            <MDBRow>
                <MDBCol md="9">
                    <div className="card-group my-5 row">
                        {
                            this.state.members.map((item, index) => {
                                return (
                                    <MDBCard key={index} personal className="mb-md-0 mb-4 col-md-4">
                                        <div className={"member-card"}>
                                            <MDBView hover>
                                                <MDBCardImage
                                                    top
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                                                    alt="MDBCard image cap"
                                                />
                                                <a href={`/member/${item.id}`}>
                                                    <MDBMask overlay="white-slight"/>
                                                </a>
                                            </MDBView>
                                            <MDBCardBody>
                                                <a href={`/member/${item.id}`}>
                                                    <MDBCardTitle>{item.name}</MDBCardTitle>
                                                </a>
                                                <a href={`/member/${item.id}`} className="card-meta">
                                                    Friends
                                                </a>
                                                <MDBCardText>
                                                    {item.content}
                                                </MDBCardText>
                                                <hr/>
                                                <a href="#!" className="card-meta">
                                                    <span>
                                                      <MDBIcon icon="user"/>
                                                      83 Friends
                                                    </span>
                                                </a>
                                                <p className="card-meta float-right">Joined in 2012</p>
                                            </MDBCardBody>
                                        </div>
                                    </MDBCard>
                                )
                            })
                        }


                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default Team;
