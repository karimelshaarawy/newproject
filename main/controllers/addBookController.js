var fs = require('fs');

function addBook(req, res) {
    const book = req.body.bookName;
    var user = req.cookies;
    var username = user.username;
    console.log(username);
    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);
    const array = users.array;
    for (var i = 0; i < array.length; i++) {
        if (array[i].username === username)
            array[i].books.push(book);
    }
    var newusers = JSON.stringify(users);
    fs.writeFileSync('base.json', newusers);
    res.render(book);
}

module.exports = addBook;