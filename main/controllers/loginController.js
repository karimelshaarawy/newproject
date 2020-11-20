var fs = require('fs');
var path = require('path');


function loginController(req, res) {
    const user = req.body;
    if (authenticateCredentials(user)) {
        //write jwt
        res.render('home', { alert: "false" });
    }
    else {
        res.render('home', { alert: "true" })
    }
}

function authenticateCredentials(user) {
    const username = user.username;
    const password = user.password;
    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);
    const array = users.array;
    for (var i = 0; i < array.length; i++) {
        if (array[i].username === username && array[i].password === password) {
            return true;
        }
    }
    return false;


}


module.exports = loginController;