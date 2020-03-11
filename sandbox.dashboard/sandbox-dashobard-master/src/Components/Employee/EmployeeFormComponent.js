import React, {Component} from 'react';
import {
    Container,
    Row, Col,
    Label, Input, FormGroup, Button,
} from 'reactstrap';
import 'react-widgets/dist/css/react-widgets.css';

export default class EmployeeFormComponent extends Component {
    state = {
        /*first_name: this.props.employeeToEdit ?  this.props.employeeToEdit.first_name : '',
        last_name: this.props.employeeToEdit ?  this.props.employeeToEdit.last_name : '',
        email: this.props.employeeToEdit ?  this.props.employeeToEdit.email : '',
        position: this.props.employeeToEdit ?  this.props.employeeToEdit.position : '',
        address: this.props.employeeToEdit ?  this.props.employeeToEdit.address : '',*/
        first_name: this.props.employeeToEdit,
        last_name: this.props.employeeToEdit,
        email: this.props.employeeToEdit,
        position: this.props.employeeToEdit,
        address: this.props.employeeToEdit,
    }
    onChangeFirstName = (e) => {
        this.setState({first_name: e.target.value});
    }
    onChangeLastName = (e) => {
        this.setState({last_name: e.target.value});
    }
    onChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    onChangePosition = (e) => {
        this.setState({position: e.target.value});
    }
    onChangeAddress = (e) => {
        this.setState({address: e.target.value});
    }
    save = () => {
        //console.log('EmployeeFormComponent', this.props)
        if (this.props.employeeToEdit){
            this.props.onUpdate(
                this.props.employeeToEdit.id,
                this.state.first_name,
                this.state.last_name,
                this.state.email,
                this.state.position,
                this.state.address,
            );
        }
        else{
            this.props.onSave(
                this.state.first_name,
                this.state.last_name,
                this.state.email,
                this.state.position,
                this.state.address,
            );
            console.log('EmployeeFormComponent: ',this.props);
        }
    }
    render() {
        return (
            <Container>
                    <Col xs="12">
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="firstName">First_Name</Label>
                                    <Input onChange={this.onChangeFirstName} type="text" id="firstname" placeholder="First_name" required value={this.state.name} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastName">Last_name</Label>
                                    <Input onChange={this.onChangeLastName} type="text" id="lastname" placeholder="Last_name" required value={this.state.name} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input onChange={this.onChangeEmail} type="text" id="email" placeholder="Email" required value={this.state.email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="position">Position</Label>
                                    <Input onChange={this.onChangePosition} type="text" id="position" placeholder="Position" required value={this.state.password}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input onChange={this.onChangeAddress} type="text" id="address" placeholder="Address" required value={this.state.password}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <div className="pull-right">
                        <button className="btn btn-default" onClick={this.props.onCancel}>Cancelar</button>
                        <button className="btn btn-primary" onClick={this.save}>Guardar</button>
                    </div>
            </Container>
        );
    }
}