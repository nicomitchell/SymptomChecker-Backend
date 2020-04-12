import controller from '../controller'


//example routes w function: use app.route(<URL>) appended by the functions associated with GET, POST, PUT, or DELETE requests
export default (app) => {
    app.route('/users')
        .get(controller.getAllUsers)
        .post(notebook.createUser);
    
    app.route('/users/:userID')
        .get(controller.getUser)
        .put(controller.updateUser)
        .delete(controller.deleteUser);
};