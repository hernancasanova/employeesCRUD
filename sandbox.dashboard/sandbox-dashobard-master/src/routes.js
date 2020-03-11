import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './Containers/DefaultLayout';

function Loading() {
    return <div>Loading...</div>;
}

const UserListContainer = Loadable({
    loader: () => import('./Containers/User/UserListContainer.js'),
    loading: Loading,
})

const EmployeeListContainer = Loadable({
    loader: () => import('./Containers/Employee/EmployeeListContainer.js'),
    loading: Loading,
})

const routes = [
  { path: '/dashboard', exact: true, name: 'Home', component: UserListContainer },
  { path: '/users', name: 'Usuarios', component: UserListContainer },
  { path: '/employees', name: 'Employees', component: EmployeeListContainer },
];

export default routes;
