

 module.exports = function(app) {
    const controllers = {
        auth: this.require('../controllers/auth'),
    }

    app.get('/', auth, controllers);

}