module.exports = function(app) {
    const controllers = {
        auth: require('../controllers/auth'),
    };

    app.get('/', controllers.auth.test);
    app.get('/login', controllers.auth.login);

}