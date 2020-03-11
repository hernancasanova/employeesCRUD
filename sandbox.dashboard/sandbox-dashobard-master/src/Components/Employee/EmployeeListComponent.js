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

export default class EmployeeListComponent extends Component {
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
                    <strong>Employees</strong>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First_name</th>
                                    <th>Last_name</th>
                                    <th>Email</th>
                                    <th>Position</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map((employee, index) => {
                                        let type = employee.type === 'INCOME' ? 'Ingreso' : 'Egreso';
                                        return <tr key={employee.id}>
                                                    <td>{employee.id}</td>
                                                    <td>{employee.first_name}</td>
                                                    <td>{employee.last_name}</td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.position}</td>
                                                    <td>{employee.created_at}</td>
                                                    <td>{employee.updated_at}</td>
                                                    <td><i onClick={() => this.props.onEditClick(employee.id)} className="fa fa-edit"></i></td>
                                                    <td><i onClick={() => this.props.onDeleteClick(employee.id)} className="fa fa-remove"></i></td>
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