import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
    Card,
    Col,
    Row,
    View,
    Mask,
    CardImage,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Fa,
    MDBBtn
} from 'mdbreact';


import Nav from "../nav/nav";
import './member.css'

const imageSrc = `${process.env.PUBLIC_URL}/assets/image/img-1.jpg`;

class Member extends Component {
    state = {
        member: []
    }

    componentDidMount() {
        const memberId = this.props.match.params.memberId;
        console.log(memberId);
        axios.get(`http://127.0.0.1:8000/api/${memberId}`)
            .then(res => {
                this.setState({
                    member: res.data
                });
                // console.log("axios"+res.data)
            })
    }

    goBack = () => {
        this.props.history.push('/');
    };

    handleDelete = (event) => {
        const memberId = this.props.match.params.memberId;
        axios.delete(`http://127.0.0.1:8000/api/delete/${memberId}`)
            .then(res => {
                this.props.history.push('/')
            });
        // this.forceUpdate()
        // this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Nav {...this.props}></Nav>
                <React.Fragment>
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="3" className="mb-5">
                            <Card>
                                <CardImage className="img-fluid" src={imageSrc}/>
                                <CardBody>
                                    <CardTitle
                                        className="text-center mb-2 font-bold">{this.state.member.name} </CardTitle>
                                    <CardTitle sub
                                               className="text-center indigo-text mb-2 font-bold">Photographer</CardTitle>
                                    <CardText>
                                        <strong className="mb-2">About:</strong>
                                        {this.state.member.content}
                                    </CardText>
                                    <div className="row justify-content-end pr-1">
                                        <Button size="sm" outline color="primary">More...</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" lg="9">
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {
                                    this.props.isAuthenticated &&
                                    <div>
                                        <Link to={`/member/${this.state.member.id}/update`}>
                                            <MDBBtn rounded outline color="secondary">
                                                Update profile
                                            </MDBBtn>
                                        </Link>
                                        <MDBBtn onClick={this.handleDelete} rounded outline color="danger">
                                            delete profile
                                        </MDBBtn>
                                    </div>
                                }
                                <MDBBtn onClick={this.goBack} rounded outline color="primary">go back</MDBBtn>
                            </div>
                            <section className="text-center pb-3">
                                <Row className="d-flex justify-content-center">
                                    <Col lg="6" xl="5" className="mb-3">
                                        <Card className="d-flex mb-5">
                                            <View>
                                                <img
                                                    src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg"
                                                    alt="Project" className="img-fluid"/>
                                                <Mask overlay="white-slight"/>
                                            </View>
                                            <CardBody>
                                                <CardTitle className="font-bold mb-3">
                                                    <strong>Project name</strong>
                                                </CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                            </CardBody>
                                            <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col lg="6" xl="5" className="mb-3">
                                        <Card className="d-flex mb-5">
                                            <View>
                                                <img
                                                    src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg"
                                                    alt="Project" className="img-fluid"/>
                                                <Mask overlay="white-slight"/>
                                            </View>
                                            <CardBody>
                                                <CardTitle className="font-bold mb-3">
                                                    <strong>Project name</strong>
                                                </CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                            </CardBody>
                                            <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col lg="6" xl="5" className="mb-3">
                                        <Card className="d-flex mb-5">
                                            <View>
                                                <img
                                                    src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg"
                                                    alt="Project" className="img-fluid"/>
                                                <Mask overlay="white-slight"/>
                                            </View>
                                            <CardBody>
                                                <CardTitle className="font-bold mb-3">
                                                    <strong>Project name</strong>
                                                </CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                            </CardBody>
                                            <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Previewl
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col lg="6" xl="5" className="mb-3">
                                        <Card className="d-flex mb-5">
                                            <view-wrapper>
                                                <img
                                                    src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg"
                                                    alt="Project" className="img-fluid"/>
                                                <Mask overlay="white-slight"/>
                                            </view-wrapper>
                                            <CardBody>
                                                <CardTitle className="font-bold mb-3">
                                                    <strong>Project name</strong>
                                                </CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                            </CardBody>
                                            <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                </React.Fragment>
            </div>);
    }
}

export default Member;
