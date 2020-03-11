import React, { Component } from 'react';
import {
    Button,
    Card, CardBody, CardHeader,
    Modal, ModalBody, ModalFooter, ModalHeader,
    Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeActions from '../../Redux/EmployeeRedux';
import EmployeeListComponent from '../../Components/Employee/EmployeeListComponent';
import EmployeeFormComponent from '../../Components/Employee/EmployeeFormComponent';

class EmployeeListContainer extends Component {
    state = {
        modalCreateOpen: false,
        userToEdit: null,
    }
    componentDidMount = () => {
        console.log('fetchEmployees',this.props);
        this.props.actions.employee.fetchEmployees();
    }
    componentDidUpdate = (prevProps) => {
        // If the action was creating a new user, then the new [user] object will be not null, but the old one will be invalid
        if (!prevProps.employee.employee && this.props.employee.employee){
            this.props.actions.employee.fetchEmployees();
            this.toggleCreate();
        }
        else if (!prevProps.employee.employeeToEdit && this.props.employee.employeeToEdit){
            this.setState({
                employeeToEdit: this.props.employee.employeeToEdit,
                modalCreateOpen: true,
            });
        }
        else if (!prevProps.employee.employeeDeleted && this.props.employee.employeeDeleted){
            this.props.actions.employee.fetchEmployees();
        }
    }
    createEmployee = (first_name, last_name, email, position, address) => {
        this.props.actions.employee.createEmployee(first_name, last_name, email, position, address);
    }
    updateEmployee = (employee_id, first_name, last_name, email, position, address) => {
        this.props.actions.employee.updateEmployee(employee_id, first_name,last_name, email, position, address);
    }
    loadEmployee = (employeeId) => {
        this.props.actions.employee.fetchEmployee(employeeId);
    }
    deleteEmployee = (employeeId) => {
        this.props.actions.employee.deleteEmployee(employeeId);
    }
    toggleCreate = () => {
        this.setState({
            employeeToEdit: null,
            modalCreateOpen: !this.state.modalCreateOpen,
        });
    }
    render() {
        console.log('fgh', this.props);
        return (
            <div>
                <Modal isOpen={this.state.modalCreateOpen} className={'modal-primary'} toggle={this.toggleCreate}>
                    <ModalHeader toggle={this.toggleCreate}>New Employee</ModalHeader>
                    <ModalBody>
                        <EmployeeFormComponent
                            onSave={this.createEmployee}
                            onUpdate={this.updateEmployee}
                            onCancel={() => this.setState({modalCreateOpen: false})}
                            employeeToEdit={this.state.employeeToEdit}
                        />
                    </ModalBody>
                </Modal>
                <Card>
                    <CardHeader>
                        <Label>Administration of employees</Label>
                    </CardHeader>
                    <CardBody>
                        <Button color="primary" onClick={this.toggleCreate}><i className="fa fa-plus-circle"></i> New employee</Button>
                    </CardBody>
                </Card>
                <EmployeeListComponent
                    employees={this.props.employee.employees }
                    onEditClick={this.loadEmployee}
                    onDeleteClick={this.deleteEmployee}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    employee : state.employee,
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
        employee: bindActionCreators(EmployeeActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);