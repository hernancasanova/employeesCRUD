import apisauce from 'apisauce';

const create = (baseURL) => { // home
    const api = apisauce.create({
        baseURL,
        headers: {
            Accept : 'application/json',
        }
    });

    if (true) {
        api.addMonitor(response => console.log('response: ', response));
    }

    // TODO - Add error parser to transform into an specific error api

    /**
     * Creates an user
     * @param string name
     * @param string email
     * @param string password
     * @returns Promise
     */
    const postUserCollection = (name, email, password) => {
        return api.post('/user', { name, email, password });
    };

    /**
     * Update an user
     * @param int    userId  User id
     * @param Object user    User object
     * @returns Promise
     */
    const patchUserResource = (userId, name, email, password) => {
        return api.patch(`/user/${userId}`, {name, email, password});
    };

    /**
     * Delete an user
     * @param int    userId  User id
     * @returns Promise
     */
    const deleteUserResource = (userId) => {
        return api.delete(`/user/${userId}`);
    };

    /**
     * Get users
     * @returns Promise
     */
    const getUserCollection = () => {
        return api.get(`/user`);
    };

    /**
     * Delete an user
     * @param int    userId  User id
     * @returns Promise
     */
    const getUserResource = (userId) => {
        return api.get(`/user/${userId}`);
    };


    const postEmployeeCollection = (first_name, last_name, email, position, address) => {
        return api.post('/employee', { first_name, last_name, email, position, address });
    };

    /**
     * Update an user
     * @param int    userId  User id
     * @param Object user    User object
     * @returns Promise
     */
    const patchEmployeeResource = (employeeId, first_name, last_name, email, position, address) => {
        return api.patch(`/employee/${employeeId}`, {first_name, last_name, email, position, address});
    };

    /**
     * Delete an user
     * @param int    userId  User id
     * @returns Promise
     */
    const deleteEmployeeResource = (employeeId) => {
        return api.delete(`/employee/${employeeId}`);
    };

    /**
     * Get users
     * @returns Promise
     */
    const getEmployeeCollection = () => {
        return api.get(`/employee`);
    };

    /**
     * Delete an user
     * @param int    userId  User id
     * @returns Promise
     */
    const getEmployeeResource = (employeeId) => {
        return api.get(`/employee/${employeeId}`);
    };

    return {
        postUserCollection,
        patchUserResource,
        deleteUserResource,
        getUserCollection,
        getUserResource,
        postEmployeeCollection,
        patchEmployeeResource,
        deleteEmployeeResource,
        getEmployeeCollection,
        getEmployeeResource,
    };



    //EMPLOYEES METHODS

};


export default {
    create
}
