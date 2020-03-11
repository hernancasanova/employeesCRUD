import React, {Component} from 'react';
import {
    Container,
    Row, Col,
    Label, Input, FormGroup, Button,
} from 'reactstrap';
import 'react-widgets/dist/css/react-widgets.css';

export default class UserFormComponent extends Component {
    state = {
        name: this.props.userToEdit ?  this.props.userToEdit.name : '',
        email: this.props.userToEdit ?  this.props.userToEdit.email : '',
        password: this.props.userToEdit ?  this.props.userToEdit.password : '',
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }
    onChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    onChangePassword = (e) => {
        this.setState({password: e.target.value});
    }
    save = () => {
        console.log('UserFormComponent', this.props)
        if (this.props.userToEdit){
            this.props.onUpdate(
                this.props.userToEdit.id,
                this.state.name,
                this.state.email,
                this.state.password
            );
        }
        else{
            this.props.onSave(
                this.state.name,
                this.state.email,
                this.state.password
            );
        }
    }
    render() {
        return (
            <Container>
                    <Col xs="12">
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">Nombre Completo</Label>
                                    <Input onChange={this.onChangeName} type="text" id="name" placeholder="Nombre completo" required value={this.state.name} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Email</Label>
                                    <Input onChange={this.onChangeEmail} type="text" id="email" placeholder="Email" required value={this.state.email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Contraseña</Label>
                                    <Input onChange={this.onChangePassword} type="text" id="password" placeholder="****" required value={this.state.password}/>
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