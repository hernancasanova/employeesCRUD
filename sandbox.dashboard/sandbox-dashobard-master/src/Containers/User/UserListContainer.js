import React, { Component } from 'react';
import {
    Button,
    Card, CardBody, CardHeader,
    Modal, ModalBody, ModalFooter, ModalHeader,
    Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../../Redux/UserRedux';
import UserListComponent from '../../Components/User/UserListComponent';
import UserFormComponent from '../../Components/User/UserFormComponent';

class UserListContainer extends Component {
    state = {
        modalCreateOpen: false,
        userToEdit: null,
    }
    componentDidMount = () => {
        this.props.actions.user.fetchUsers();
    }
    componentDidUpdate = (prevProps) => {
        // If the action was creating a new user, then the new [user] object will be not null, but the old one will be invalid
        if (!prevProps.user.user && this.props.user.user){
            this.props.actions.user.fetchUsers();
            this.toggleCreate();
        }
        else if (!prevProps.user.userToEdit && this.props.user.userToEdit){
            this.setState({
                userToEdit: this.props.user.userToEdit,
                modalCreateOpen: true,
            });
        }
        else if (!prevProps.user.userDeleted && this.props.user.userDeleted){
            this.props.actions.user.fetchUsers();
        }
    }
    createUser = (name, email, password) => {
        this.props.actions.user.createUser(name, email, password);
    }
    updateUser = (user_id, name, email, password) => {
        this.props.actions.user.updateUser(user_id, name, email, password);
    }
    loadUser = (userId) => {
        this.props.actions.user.fetchUser(userId);
    }
    deleteUser = (userId) => {
        this.props.actions.user.deleteUser(userId);
    }
    toggleCreate = () => {
        this.setState({
            userToEdit: null,
            modalCreateOpen: !this.state.modalCreateOpen,
        });
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modalCreateOpen} className={'modal-primary'} toggle={this.toggleCreate}>
                    <ModalHeader toggle={this.toggleCreate}>Nuevo Usuario</ModalHeader>
                    <ModalBody>
                        <UserFormComponent
                            onSave={this.createUser}
                            onUpdate={this.updateUser}
                            onCancel={() => this.setState({modalCreateOpen: false})}
                            userToEdit={this.state.userToEdit}
                        />
                    </ModalBody>
                </Modal>
                <Card>
                    <CardHeader>
                        <Label>Administración de Usuarios</Label>
                    </CardHeader>
                    <CardBody>
                        <Button color="primary" onClick={this.toggleCreate}><i className="fa fa-plus-circle"></i> Nuevo Usuario</Button>
                    </CardBody>
                </Card>
                <UserListComponent
                    users={this.props.user.users}
                    onEditClick={this.loadUser}
                    onDeleteClick={this.deleteUser}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
        user: bindActionCreators(UserActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);