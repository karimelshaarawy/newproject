const fs = require('fs');
const path = require('path');
function readlistController(req, res) {
    const user = req.cookies.username;
    const readList = getReadList(user);
    res.render('readlist', { readList })
}

function getReadList(user) {
    var result;
    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);
    const usersArray = users.array;
    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].username === user) {
            result = usersArray[i].books;
        }
    }
    return result;

}

module.exports = readlistController;