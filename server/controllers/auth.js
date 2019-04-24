
    function login(req, res) {
        res.send("Hello from Controller");
    }
    
    function register() {

    }

    function deactivateUser() {

    }

    function test(req, res) {
        res.send("<h1>Hello from the API</h1>");
    }

    module.exports = {
        login : login,
        register : register,
        deactivateUser : deactivateUser,
        test : test
    }
