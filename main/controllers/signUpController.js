function signUpController(req, res) {
    var name = req.body.username;
    var pass = req.body.password;
    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);

    if (databaseContainsUsername(name))
        console.log("koko");
    else {
        var newuser = { username: name, password: pass };
        users.array.push(newuser);
        var newusers = JSON.stringify(users);
        fs.writeFileSync('base.json', newusers);
        res.render('home', { alert: "false" });
    }
}

function databaseContainsUsername(username) {

    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);
    const array = users.array;
    for (var i = 0; i < array.length; i++) {
        if (array[i].username === username)
            return true;
    }
    return false;
}


module.exports = signUpController;