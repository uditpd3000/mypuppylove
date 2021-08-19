import React, { Component } from 'react'
import { Form,
    FormGroup,
    Label,
    Input,
    Button, 
    Row, 
    Col, 
    Container, 
    Card, 
    CardBody,
    FormFeedback
 } from 'reactstrap'
import love from './assets/3277616.jpg'
import { withRouter } from 'react-router'




class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roll: '',
            password: '',
            remember: false,
            changed: {
                roll: false,
                password: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        this.props.history.push("/home")
        
    }
    

    handleChange=(value)=>(event)=>{
        this.setState({
            changed: { ...this.state.changed, [value]: true 
        }});
    }

    validate(roll,password){
        const wrongInput={
            roll: '',
            password: '',
            button: false
        }



        const reg = /^\d+$/;
        if (roll && !reg.test(roll))
         wrongInput.roll = 'Please Enter a Valid Roll no.';

        if(password && password.length<8 || password.length>16)
        wrongInput.password='Password should be in between 8 to 16 characters';

        if(wrongInput.password==='' && wrongInput.password==='' && roll && password)
        wrongInput.button=true;

        return wrongInput

    }

    


    render() {
        const wrongInputs = this.validate(this.state.roll,this.state.password)
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={love} className="loveinair" alt="Love is in the air"></img>
                    </Col>
                    <Col className="CardContainer">
                        <Card className="LoginCard">
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label htmlFor="roll">Roll No.</Label>
                                        <Input
                                        required
                                         type="text"
                                          name="roll"
                                          id="roll" 
                                          value={this.state.roll}
                                          valid={wrongInputs.roll===''}
                                          invalid={wrongInputs.roll!==''}
                                          onChange={this.handleInputChange}
                                          onBlur={this.handleChange('roll')}
                                        ></Input>
                                        <FormFeedback>{wrongInputs.roll}</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                        required
                                         type="password" 
                                         name="password"
                                         id="password"
                                         value={this.state.password}
                                         valid={wrongInputs.password===''}
                                         invalid={wrongInputs.password!==''}
                                         onChange={this.handleInputChange}
                                         onBlur={this.handleChange('password')}>
                                        
                                         </Input>
                                         <FormFeedback>{wrongInputs.password}</FormFeedback>
                                    </FormGroup >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="remember"
                                                checked={this.state.remember}
                                                onChange={this.handleInputChange} 
                                                />
                                            <small>Remember me</small>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="text-center">
                                            <Button
                                                disabled={!wrongInputs.button}
                                                className="my-4"
                                                className="text-center"
                                                type="submit"
                                            >
                                                Sign in
                                            </Button>
                                        </div>
                                    </FormGroup>
                                    
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
                
            </Container>
            

        )
    }


}

export default withRouter(Login)