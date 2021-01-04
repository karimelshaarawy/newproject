var fs = require('fs');
var path = require('path');


function addBook(req, res) {
    const book = req.body.bookName;
    var user = req.cookies;
    var username = user.username;
    const data = fs.readFileSync(path.join('base.json'));
    const users = JSON.parse(data);
    const array = users.array;
    var found = bookAlreadyExistsInReadList(array, book, username);
    for (var i = 0; i < array.length; i++) {
        if (array[i].username === username)
            if (!array[i].books.includes(book)) {
                array[i].books.push(book);
            }
    }
    var newusers = JSON.stringify(users);
    fs.writeFileSync('base.json', newusers);
    if (!found) {
        res.render(book, { found: false });
    }
    else {
        res.render(book, { found: true });
        // res.redirect('/');
        console.log("I came here ");

    }
}

function bookAlreadyExistsInReadList(userArray, book, username) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].username === username)
            if (userArray[i].books.includes(book))
                return true;
    }
}

module.exports = addBook;