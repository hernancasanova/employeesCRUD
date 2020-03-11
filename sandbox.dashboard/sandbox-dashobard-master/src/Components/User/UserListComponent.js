import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
    Table,
    Button,
} from 'reactstrap';

export default class UserListComponent extends Component {
    state = {
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    renderDesktop = () => {
        return (
            <Card>
                <CardHeader>
                    <strong>Usuarios</strong>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Creado</th>
                                    <th>Editado</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.users.map((user, index) => {
                                        let type = user.type === 'INCOME' ? 'Ingreso' : 'Egreso';
                                        return <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.created_at}</td>
                                                    <td>{user.updated_at}</td>
                                                    <td><i onClick={() => this.props.onEditClick(user.id)} className="fa fa-edit"></i></td>
                                                    <td><i onClick={() => this.props.onDeleteClick(user.id)} className="fa fa-remove"></i></td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Row>
                </CardBody>
            </Card>
        );
    }
    renderMobile = () => {
        return <div>TODO</div>
    }
    render() {
        const {width} = this.state;
        const isMobile = width <= 500;
        return (
            <div>
                {isMobile ? this.renderMobile() : this.renderDesktop()}
            </div>
        );
    }
}