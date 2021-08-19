import React, {Component} from 'react'
import { Container,Row,Col,Card,Input,CardBody,Button,CardTitle,CardImg,CardImgOverlay,CardText,CardDeck } from 'reactstrap'
import profile from './assets/Profile_Pic.jpg'
import boy from './assets/boy.jpg'
import girl from './assets/girl.jpg'
import heart from './assets/heart.png'
import {PUPPIES} from './peoples'

class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            crush1:PUPPIES[0],
            crush2:PUPPIES[1],
            crush3:PUPPIES[2],
            crush4:PUPPIES[3]
        }


    }

    handleSave(){
       alert("Your choices have been saved")
    }
    handleSendHearts(){
        alert("Your Hearts have been sent to your loved ones")
    }

    render(){
        return(
            <Container className="Home">
                <Row style={{display:'flex'}}>
                    <Col xl={4} xs={12}>
                        <Card className="ProfileCard">
                            <CardImg className="rounded-circle Profile" src={profile} />  
                            <CardTitle><div className="text-center"><h2>Puppy boy</h2><h4>200000</h4></div><br/></CardTitle>
                            <CardTitle>
                                <h2> Hearts for you </h2>
                            </CardTitle>
                            <Row>
                                <Col>
                                <CardImg src={girl} className="rounded-circle girl"/>
                                <img className="heart" src={heart}></img>
                                <img className="heart" src={heart}></img>
                                <img className="heart" src={heart}></img>
                                </Col>
                                <Col>
                               <CardImg src={boy} className="rounded-circle boy"/>
                               <img className="heart" src={heart}></img>
                               <img className="heart" src={heart}></img>
                                </Col>
                            </Row>
                                
                            
                        </Card>
                    </Col>
                    <Col>
                    <Card className="Searchbox text-center">
                        <CardTitle><h1>Find your love</h1></CardTitle>
                        <br/>
                        <Input 
                        type="text" 
                        className="searchtransparent"
                        placeholder="Search"
                        >
                        </Input>
                        <br/><br/><br/>
                        

                    </Card>
                    <div className="text-center"><h4>Your Choices here</h4></div>
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                        <Card className="Studentscard">
                            <Row>
                                <Col>
                                <CardImg src={this.state.crush1.image} className="Profile1"></CardImg>
                                </Col>
                                <Col>
                                <CardTitle style={{textAlign:'left'}}><div style={{fontSize:'30px', textAlign:'left'}}>{this.state.crush1.name}</div></CardTitle>
                                <h4>{this.state.crush1.roll}</h4>
                                </Col>
                            </Row>
                            
                        </Card>
                        <Card className="Studentscard">
                        <Row>
                                <Col>
                                <CardImg src={this.state.crush2.image} className="Profile1"></CardImg>
                                </Col>
                                <Col>
                                <CardTitle style={{textAlign:'left'}}><div style={{fontSize:'30px', textAlign:'left'}}>
                                    {this.state.crush2.name}</div>
                                    </CardTitle>
                                <h4>{this.state.crush2.roll}</h4>
                                </Col>
                            </Row>
                            
                        </Card>
                    </CardDeck>
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                        <Card className="Studentscard">
                        <Row>
                                <Col>
                                <CardImg src={this.state.crush3.image} className="Profile1"></CardImg>
                                </Col>
                                <Col>
                                <CardTitle style={{textAlign:'left'}}><div style={{fontSize:'30px', textAlign:'left'}}>
                                    {this.state.crush3.name}</div>
                                    </CardTitle>
                                <h4>{this.state.crush3.roll}</h4>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="Studentscard">
                        <Row>
                                <Col>
                                <CardImg src={this.state.crush4.image} className="Profile1"></CardImg>
                                </Col>
                                <Col>
                                <CardTitle style={{textAlign:'left'}}><div style={{fontSize:'30px', textAlign:'left'}}>
                                   {this.state.crush4.name}</div>
                                    </CardTitle>
                                <h4>{this.state.crush4.roll}
                        
                                </h4>
                                </Col>
                            </Row>
                        </Card>
                    </CardDeck>
                    <div className="text-center" style={{margintop:'1%', marginBottom:'1%'}}>
                        <Button onClick={this.handleSave}>Save Choices</Button></div>
                    <div className="text-center"><Button onClick={this.handleSendHearts}>Send your Hearts</Button></div>
                    </Col>
                </Row>
                
            </Container>

        

        )
    }

}

export default Home